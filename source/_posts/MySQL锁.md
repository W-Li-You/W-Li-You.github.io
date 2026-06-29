---
title: mysql锁
date: 2023-5-11
tags: 
- 数据库
categories: 学习
---

# 一、锁

锁是计算机协调多个进程或线程并发访问某一资源的机制。在数据库中，除传统的计算资源（CPU、RAM、I/O）的争用以外，数据也是一种供许多用户共享的资源。如何保证数据并发访问的一致性、有效性是所有数据库必须解决的一个问题，锁冲突也是影响数据库并发访问性能的一个重要因素。从这个角度来说，锁对数据库而言显得尤其重要，也更加复杂。

MySQL中的锁，按照锁的粒度分，分为以下三类：

全局锁：锁定数据库中的所有表。

表级锁：每次操作锁住整张表。

行级锁：每次操作锁住对应的行数据。

### （一）全局锁

全局锁是对整个数据库实例加锁，加锁之后整个实例只能读取，后续的DML的写语句，DDL语句，已经更新操作的事务提交语句都将被阻塞。

其典型使用场所是做全库的逻辑备份，对所有表进行锁定，从而获取一致性的视图，保证数据的完整性。

```sql
 flush tables with read lock;
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

**弊端：**

性能较差，是比较重的操作。

<1>、如果在主库上备份，那么备份期间都不能执行更新，业务基本上就要停摆。

<2>、如果在从库上备份，那么备份期间从库不能执行主库同步过来的二进制日志（binlog），而导致主从延迟。

在InnoDB引擎中，我们可以在备份时加上参数--single-transaction参数来完成不加锁的一致性数据备份。

```
mysqldump --single-transcation -uroot -p123456 itcast > itcast.sql
```

### （二）表级锁

锁住整张表，锁定粒度大，发生锁冲突的概率最高，并发度最低。应用在MyISAM、InnoDB、BDB等存储引擎中。

对于表级锁，主要分为以下三类：

**<1>、表锁**

表共享读锁（read lock）

表独占写锁（write lock）![img](https://img-blog.csdnimg.cn/7c9b4dc96e764c718bf787ec5a762def.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑







加锁：

```sql
lock tables 表名... read/write
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

释放锁：

```sql
unlock tables/客户端断开连接
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

**<2>、元数据锁（meta data lock，MDL）**

MDL加锁过程是系统自动控制，无需显式使用，在访问一张表的时候会自动加上。MDL锁主要作用是维护表元数据的数据一致性，在表上有活动事务的时候，不可以对元数据进行写入操作。为了DML与DDL冲突，保证读写的正确性。

在MySQL5.5种引入了MDL，当对一张表进行增删改查的时候，加MDL读锁（共享）；当对表结构进行变更操作的时候，加MDL写锁（排他）。![img](https://img-blog.csdnimg.cn/3ccc52bd34a24a509300f363dbb677b0.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

 SHARED_READ，SHARED_WRITE：共享锁，相互兼容，与EXCLUSIVE互斥。



EXCLUSIVE：排他，与其他MDL都互斥。

查看元数据锁

```sql
SELECT 
object_type,object_schema,object_name,lock_type,lock_duration 
FROM performance_schema.metadata_locks;
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

**<3>、意向锁**

为了避免DML在执行时，加的行锁与表锁的冲突，在InnoDB中引入了意向锁，使得表锁不用检查每行数据是否加锁，使用意向锁来减少表锁的检查。

意向共享锁（IS）：由语句select...lock in share mode添加。与表锁共享锁（read）兼容，与表锁排他锁（write）互斥。

意向排他锁（IX）：由insert、update、delete、select...for update添加。与表锁共享锁（read）和排他锁（write）都互斥。但是意向锁之间不会互斥。

查看意向锁及行锁的加锁情况：

```sql
SELECT 
object_schema,object_name,index_name,lock_type,lock_data 
FROM performance_schema.fate_locks;
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

### （三）行级锁

每次操作锁住对应的行数据。锁定粒度最小，发生锁冲突概率最低，并发度最高。应用在InnoDB存储引擎中。

InnoDB的数据时基于索引组织的，行锁时通过索引上的索引项加锁来实现的，而不是对记录加的锁，对于行级锁，主要分为以下三类：

1、行锁（Record Lock）：锁定单个行记录的锁，防止其他事务对此进行update和delete。在RC、RR隔离级别下都支持。

2、间隙锁（Gap Lock）：锁定索引记录间隙（不含该记录），确保索引记录间隙不变，防止其他事务在这个间隙进行insert，产生幻读。在RR隔离级别下都支持。

3、临键锁（Next-Key Lock）：行锁和间隙锁组合，同时锁住数据，并锁住数据前面的间隙Gap。在RR隔离级别下支持。

**行锁**

InnoDB实现了以下两种类型的行锁：

共享锁（S）：允许一个事务去读取一行，阻止其他事务获得相同数据集的排他锁。

排他锁（X）：允许获取排他锁的事务更新数据，阻止其他事务获取相同数据集的共享锁和排他锁。![img](https://img-blog.csdnimg.cn/395c8a71f64742b6b57a0aa09494dabf.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑![img](https://img-blog.csdnimg.cn/08334d9b1dab422c9553cfa7fee668c7.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑



 默认情况下，InnoDB在REPEATABLE READ事务隔离级别允许，InnoDB使用next-key锁进行搜索和索引扫描，以防止幻读。

针对唯一索引进行检索时，对已存在的记录进行等值匹配时，会自当优化为行锁。

InnoDB的行锁时针对于索引加的锁，不通过索引条件检索数据，那么InnoDB将对表中的所有记录加锁，此时就会升级为表锁。

**间隙锁/临键锁**

间隙锁锁的是两个记录间的间隙，不包含数据记录，临键锁锁的是当前的数据记录和该数据之前的间隙。

默认情况下，InnoDB在REPEATABLE READ事务隔离级别允许，InnoDB使用next-key锁进行搜索和索引扫描，以防止幻读。

索引上的等值查询（唯一索引），给不存在的记录加锁时，优化为间隙锁。

索引上的等值查询（普通索引），向右遍历时最后一个值不满足查询需求时，next-key lock退化为间隙锁。

索引上的范围查询（唯一索引）--会访问到不满足条件的第一个值为止。

间隙锁的唯一目的时防止其他事务插入间隙。间隙锁可以共存，一个事务采用的间隙锁不会阻止另一个事务在同一间隙上采用间隙锁。
