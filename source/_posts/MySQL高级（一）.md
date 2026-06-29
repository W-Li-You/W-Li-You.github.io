---
title: mysql高级（一）
date: 2023-4-20
tags: 
- 数据库
categories: 学习
---

# 一、存储引擎

## （一）Mysql体系结构

![img](https://img-blog.csdnimg.cn/a217ede77aed49f481f4684a8a43fc76.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑



**连接层 ：**接收客户端连接，完成连接处理，以及认证授权的相关的安全方案。

**服务层：**绝大部分的核心功能都在服务层，所有跨存储引擎的实现都在服务层，如SQL接口，并完成缓存查询，SQL的分析和优化。

**引擎层：**存储引擎层， 存储引擎真正的负责了MySQL中数据的存储和提取，服务器通过API和存储引擎进行通信。不同存储引擎索引结构不一样。

**存储层：**存储数据库的相关数据，日志，索引，错误日志等。

## （二）存储引擎简介

存储引擎是存储数据，建立索引，更新/查询数据等技术的实现方式。存储引擎是基于表的，所以存储引擎也可被称为表类型。

![img](https://img-blog.csdnimg.cn/8bd9646e23734fb8a86252333af2cd85.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

可以在创建表的时候指定存储引擎，mysql5.5之后默认存储引擎InnoDB。

 查询数据库支持的存储引擎：

```sql
show engines;
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

![img](https://img-blog.csdnimg.cn/935db810eb4b4ff8a0303ccc9bec1544.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

## （三）存储引擎特点

###  **MEMORY：**

表数据存储在内存中，由于受到硬件问题、或断电问题的影响，只能将这些表作为临时表。

**特点：**

内存存放，访问速度比较快

支持hash索引（默认）

**文件：**

xx.sdi：存储表结构信息

### InnoDB：

InnoDB是一种兼顾高可靠性和高性能的通用存储引擎，Mysql5.5之后的默认存储引擎。

**特点：**

DML操纵遵循ACID模型，支持事务；

行级锁，提高并发访问性能；

支持外键FOREIGN KEY约束，保证数据的完整性和正确性；

**文件**

xxx.ibd：xxx是表名，InnoDB的每张表都对应一个表空间文件，存储该表的表结构f(frm,sdi)，数据和索引。

**参数：**innodb_file_per_table（每一张表都对应一个表文件，默认打开）

![img](https://img-blog.csdnimg.cn/a264fea9cbe84fef83dabbf42a06a4e9.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

### **MyISAM：**

 Mysql早期默认存储引擎。

**特点：**

不支持事务，不支持外键；

支持表锁，不支持行锁；

访问数据快；

**文件：**

xxx.MYI：存储索引

xxx.MYD：存储数据

xxx.sdi：存储表结构信息

![img](https://img-blog.csdnimg.cn/c368d439a68a47f281d047c3c1a0bff2.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

## （四）存储引擎选择

InnoDB：如果应用对事务的完整性有比较高的要求，在并发条件下要求数据的一致性，数据操作除了插入和查询之外，包含很多更新、删除操作，那么Innodb是比较合适的选择。绝大场景选择的是InnoDB。

MyISAM：如果应用是以读操作和插入操作为主，只有很少的更新和删除操作，并且对事务的完整性、并发性要求不能很高，那么选择这个存储引擎是非常合适的。例如：日志相关，服务器和评论相关数据。经常用nosql系列数据库替代。

MEMORY：将所有数据保存在内存中，访问速度快，通常用于临时表及缓存。MEMORY的缺陷就是对表的大小有限制，太大的表无法缓存在内存中，而且无法保证数据的安全性。经常用nosql系列数据库替代，例如redis。







# 二、索引

## （一）索引概述

索引（index）帮助mysql高效获取数据的数据结构（有序）。在原始数据之外，数据库还要维护索引这种的数据结构，通过这种数据结构指向数据。

无索引会全表扫描，有索引效率会比较高效。

**优点：**

提高查询效率，降低数据的IO成本。

通过索引列队数据进行排序，会降低数据排序的成本，降低CPU的消耗

**缺点：**

索引列也是要占空间的。

索引降低了更新表的速度，insert、update、delete。

## （二）索引结构

不同的存储引擎有不同的索引结构。

B+Tree索引：最常见的索引类型，大部分存储引擎都支持B+树索引。

Hash索引：底层数据结构用哈希表实现，性能很高，但不支持范围查询。

R-tree（空间索引）：是MyISAM引擎的一个特殊索引，主要用于地理空间数据类型，使用较少。

Full-text（全文索引）:是一种通过建立倒排索引，快速匹配文档的方式。使用较少。

![img](https://img-blog.csdnimg.cn/8b77a8b0d67b4569a1ffb3407b67fc00.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

默认索引是B+Tree索引。

### **B+Tree索引**

**二叉树：**顺序插入时，会形成一个链表，查询性能大大降低。二叉树只有两个子节点，大数据量情况下，层级较深，索引速度慢。

**红黑树：**可以解决形成一个链表的问题，但也只有两个子节点，大数据量情况下，层级较深，索引速度慢。

**B-Tree（多路平衡查询树）：**可以避免层级较深的缺点

![img](https://img-blog.csdnimg.cn/9dc027e6781249cc9dc76329911a0a7e.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

 **B+Tree：**相对于B-Tree，B-Tree一页中存储的键值减少，指针跟着减少，要同样保存大量数据，只能增加树的高度，导致性能降低。而且B+Tree树搜索效率稳定，叶子节点形成双向链表，便于范围搜索和排序。

分叶子节点起到索引的作用，所有元素都会出现在叶子节点。

叶子节点中间形成一个单向链表。

![img](https://img-blog.csdnimg.cn/49cf020e0f1c4f0a9cd0617763bde498.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

Mysql中对经典的B+Tree进行了优化。在原B+Tree的基础上，增加了一个指向相邻叶子节点的链表指针，形成 了带指针的B+Tree，提高区间访问性能，利于数据库数据的排序。

![img](https://img-blog.csdnimg.cn/8ebe38e12b26415dafcce7ae20fd4f85.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

### **Hash索引**

采用一定的hash算法，将键值换算成新的hash值，映射到对应的槽位上，然后存储在hash表中。

如果产生了hash冲突，可以通过链表来解决。

![img](https://img-blog.csdnimg.cn/059312f5a09f433dae738fe863f88858.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

**特点：**

只能使用等值比较（=，in），不支持范围查询（between，>，<，···）；

无法使用索引完成排序操作

查询效率高，通常只需要一次检索就行了，效率通常高于B+Tree索引。

**存储引擎支持：**

Memory引擎，但InnoDB中具有自适应hash功能，hash索引是存储引擎根据B+Tree索引在指定条件下自动创建的。

## （三）索引分类

**主键索引**

针对表中主键创建的索引，默认自动创建，只能有一个，primary

**唯一索引**

避免同一表中某数据列的值重复，可以有多个，unique

**常规索引**

快速定位特定数据，可以有多个

**全文索引**

全文索引查找的是文本中的关键字，而不是索引当中的值，可以有多个，fulltext

### **在InnoDB中，根据索引存储形式，又分为：**

**聚集索引**

将数据存储与索引放到了一块，索引结构的叶子节点保存了行数据，必须有，而且只有一个。

聚集索引选取规则：

如果存在主键，主键索引就是聚集索引。

如果不存在主键，将使用第一个唯一索引作为聚集送印。

如果表没有主键，或没有合适的唯一索引，则InnoDB会自动生成一个rowid作为隐藏的聚集索引。

**二级索引**

将数据和索引分开存储，索引结构的叶子节点关联的是对应的主键，可以存在多个。

![img](https://img-blog.csdnimg.cn/231e9a86385d405ea553caa00e879a7b.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

**回表查询：**先到二级索引中拿到对应主键值，再根据主键值到聚集索引中拿到对应行数据。

## （四）索引语法

**创建索引**

```sql
CREATE [UNIQUE|FULLTEXT] INDEX index_name ON table_name(index_col_name,...);
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

**查看索引**

```sql
SHOW INDEX FROM table_name;
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

**删除索引**

```sql
DROP INDEX index_name ON table_name;
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

## （五）SQL性能分析

主要优化查询语句。

### **SQL执行频率**

MySQL客户端连接成功后，通过show [session|global] status命令可以提供服务器状态信息。通过如下指令，可以查看当前数据库的INSERT、UPDATE、DELETE、SELECT。

```sql
SHOW GLOBAL STATUS LIKE 'COM_______';
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

### **慢查询日志**

慢查询日志记录了所有执行时间超过指定参数（long_query_time，默认10s）的所有SQL语句的日志。

```sql
SHOW VARIABLES LIKE 'slow_query_log';
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

MySQL的慢查询日志是默认不开启的，需要在MySQL的配置文件（/ect/my.cnf）中配置如下信息：

![img](https://img-blog.csdnimg.cn/d78a3800823f4eafbcc56c1501b27341.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

 配置完毕之后，重新启动MySQL服务器进行测试，查看慢日志文件中记录的信息：/var/lib/mysql/localhost-slow.log。

### **profile详情**

show profiles 能够在做SQL优化是帮助我们了解时间都耗费到哪里去了。通过have_profiling参数，能够看到当前MySQL是否支持profile操作：

```sql
SELECT @@have_profiling;
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

默认profiling开关是关闭的，可以通过set语句在session/global级别开启profiling：

```sql
SELECT @@profiling;
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

```sql
SET @@have_profiling = 1;
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

查询执行效率

```sql
--查看每一条SQL的耗时基本情况
SHOW PROFILES;
--查看指定query_id的SQL语句各个阶段的耗时情况
SHOW PROFILE FOR QUERY query_id;
--查看指定query_id的SQL语句CPU的使用情况
SHOW PROFILE CPU FOR QUERY query_id;
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

### **explain执行计划**

EXPLAIN或者DESC命令获取MySQL如何执行SELECT语句的信息，包括在SELECT语句执行过程中表如何连接和连接的顺序。

```sql
--直接在SELECT语句之前加上关键字explain/desc
EXPLAIN SELECT 字段列表 FROM 表名 WHERE 条件;
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

![img](https://img-blog.csdnimg.cn/2f94ebe9709e4581a197cd99a342ef67.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

 **id：**select查询的序列号，表示查询中执行的select自居或者是操作表的顺序(id相同，执行顺序从上到下；id不同，值越大，越先执行)。

**select_type：**表示SELECT的类型，常见的取值有SIMPLE（简单表，既不用表连接或者子查询）、PRIMARY（主查询，即外层的查询）、UNION（UNION中的第二个或者后面的查询语句）、SUBQERY（SELECT/WHERE之后包含了子查询）等.

**type：**表示连接类型，性能由好到差的连接类型为NULL(不太可能出现NULL，当不访问表的时候会出现NULL)、system(访问一张系统表)、const(根据主键或者唯一索引访问一般会出现)、eq_ref、ref（非唯一性的索引访问时一般会出现）、range、index、all（全表扫描，性能很低）。

**possible_key：**显示可能应用的索引，一个或多个。

**key：**实际使用的索引，如果为NULL，则没有使用索引。

**key_len：**表示索引中使用的字节数，该值为索引字段的最大可能长度，并非实际使用的长度，在不损失精确性的前提下，长度越短越好。

**rows：**MySQL认为必须要执行的查询行数，在InnoDB引擎中的表中，是一个估计值，可能并不总是精确的。

**filtered：**表示返回结果的行数占需要读取行数的百分比，filtered的值越大越好。

**Extra：**格外的值。

## （六）索引使用

**最左前缀法则：**如果索引使用了多列（联合索引），要遵守最左前缀法则。最左前缀法则指的是查询从索引的最左列开始，并且不跳过索引中的列。如果跳过某一列，索引将部分失效（后面的字段索引失效）。

**范围查询：**联合索引中，出现范围查询（>，<）范围查询右侧的列索引失效。

规避：在业务允许的情况下，尽量使用（>=，<=）。

**索引列运算：**不要在索引列上进行运算操作，索引将失效。

**字符串不加引号：**字符串类型字段使用时，不加单引号，索引将失效。

**模糊查询：**如果仅仅时尾部模糊匹配，索引不会失效。如果是头部模糊匹配，索引失效。

**or连接的条件：**用or分开的条件，如果or前的条件中的列中有索引，而后面的列中没有索引，那么涉及的索引都不会被用到。

**数据分布影响：**如果MySQL评估使用索引会比全表更慢，则不使用索引。

**SQL提示：**SQL提示是优化数据库的一个重要手段，简单来说，就是在SQL语句中加入一些认为的提示来达到优化操作的目的。

```sql
--USE INDEX：建议使用
EXPLAIN SELECT * FROM 表名 USE INDEX(索引名)...;
--IGNORE INDEX：忽略用哪个索引
EXPLAIN SELECT * FROM 表名 IGNORE INDEX(索引名)...;
--FORCE INDEX：强制使用
EXPLAIN SELECT * FROM 表名 FOECE INDEX(索引名)...;
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

**覆盖索引：**尽量使用覆盖索引（查询使用了索引，并且需要返回的列，在该索引中已经能够全部找到），减少使用select *。

using index condition：查找使用了索引，但是需要回表查询数据。

using where;using index：查找使用了索引，但是需要的数据都在索引列中能找到，所以不需要回表查询数据。

**前缀索引：**当字段类型为字符串（varchar、text等）时，有时候需要索引很长的字符串，这会让索引变得很大，查询时，浪费大量的磁盘IO，影响查询效率。此时可以将字符串的一部分前缀，建立索引吗，这样可以大大节约索引空间，从而提高索引效率。

```sql
CREATE INDEX idx_XXX ON table_name(column(n));
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

前缀长度：可以根据索引的选择性来决定，而选择性是指不重复的索引值（基数）和数据表的记录总数的比值，索引选择性越高查询效率越高。唯一索引的选择性是1，这是最好的索引选择性，性能也是最好的。

```sql
--求取选择性
SELECT count(distinct 字段名)/count(*) FROM 表名;
SELECT count(distinct SUBSTRING(字段名,1,5))/count(*) FROM 表名;
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

**单列索引与联合索引**

单列索引：即一个索引只包含单个列。

联合索引：即一个索引包含了多个列。

在业务场景中，如果存在多个查询条件，考虑针对查询字段建立索引时，建议建立联合索引，而非单列索引。

## （七）索引设计原则

1，针对于数据量较大（超100多万），且查询比较频繁的表建立索引。

2，针对于常用于查询条件（where）、排序（order by）、分组（group by）操作的字段建立索引。

3，尽量选择区分度高的列作为索引（例如身份证号），尽量建立唯一索引，区分度越高，使用索引的效率越高。

4、如果是字符串类型的字段，字段的长度较长，可以针对于字段的特点，建立前缀索引。

5、尽量使用联合索引，减少单列索引，查询时，联合索引很多时候可以覆盖，节省存储空间，避免回表，提高查询效率。

6、要控制索引的数量，索引并不是多多益善，索引越多，维护索引结构的代价也就越大，会影响增删改的效率。

7、如果索引列不能存储NULL值，请在创建表时用NOT NULL约束它。当优化器知道每列是否包含NULL值时，它可以更好地确定哪个索引最有效地用于查询。