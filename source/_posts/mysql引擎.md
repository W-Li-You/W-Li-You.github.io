---
title: mysql引擎
date: 2022-09-15
tags: 
- 数据库
categories: 学习
---

**常用的mysql引擎：MyISAM、InnoDB、Memory。**

<!--more-->

MyISAM：MyISAM是mysql5.5之前的默认引擎。不支持事务，只支持表锁，不支持行锁。但是访问速度快。如果操作主要以读取和插入为主，修改和删除的操作很少，对数据的并发性和完整性要求并不是很强的情况下可以用该引擎，比如用户日志，评论等。

InnoDB：mysql5.5之后的默认引擎。支持事务和行锁，支持外键。是一种兼顾高可靠性和高性能的通用存储引擎。如果应用对事务的完整性有比较高的要求，在并发条件下要求数据的一致性，数据操作除了插入和查询之外，包含很多更新、删除操作，那么innodb是比较合适的选择。（B-Tree索引）

Memory：Memory是在内存中存储所有的数据。由于受到硬件的问题、或断电问题的影响，只能将这些表作为临时表或缓存使用。（Hash索引）



**查看数据库是否支持引擎：**

```sql
show ENGINES ;
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

![img](https://img-blog.csdnimg.cn/e8d45acb76514a03bab54c4cd9c9a334.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

suport：是否支持引擎（default是默认引擎）