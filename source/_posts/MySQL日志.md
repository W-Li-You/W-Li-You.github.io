---
title: mysql日志
date: 2023-5-23
tags: 
- 数据库
categories: 学习
---

# 一、日志

## （1）错误日志

错误日志时MySQL中最重要的日志之一，它记录了mysqld启动和停止时，以及服务器再运行过程中发生任何严重错误时的相关信息。当数据库出现任何故障导致无法正常使用时，建议首先查看此日志。

该日志时默认开启的，默认存放目录/var/log/，默认的日志文件名为mysqld.log。查看日志位置：

```sql
show variables like '%log_error%' 
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

## （2）二进制日志

二进制日志（BINLOG）记录了所有的DDL语句和DML语句，但不包括数据查询语句（SELECT、SHOW）。

作用：

（1）灾难时的数据恢复

（2）MySQL的主从复制

在MySQL8版本中，默认二进制日志时开启着的：

```sql
show variables like '%log_bin%'
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

| 日志格式  | 含义                                                         |
| --------- | ------------------------------------------------------------ |
| STATEMENT | 基于SQL语句的日志记录，记录的是SQL语句，对数据进行修改的SQL都会记录在日志文件中。 |
| ROW       | 基于行的日志记录，记录的是每一行的数据变更。（默认）         |
| MIXED     | 混合了STATEMENT和ROW两种格式，默认采用STATEMENT，在某些特殊情况下会自动切换为ROW进行记录。 |

```sql
show variables like '%binlog_format%'
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

**日志查看**

由于日志是以二进制方式存储的，不能直接读取，需要通过二进制日志查询工具mysqlbinlog来查看：

```sql
mysqlbinlog [参数选项] logfilename
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

参数选项：

-d 指定数据库名称，只列除指定的数据库相关操作。

-o 忽略掉日志中的前n行命令。

-v 将行事件（数据变更）重构为SQL语句。

-w 将行事件（数据变更）重构为SQL语句，并输出注释信息。

**日志删除**

对于比较繁忙的业务系统，每天生成的binlog数据巨大，如果长时间不清除，将会占用大量磁盘空间。

| 指令                                             | 含义                                                         |
| ------------------------------------------------ | ------------------------------------------------------------ |
| reset master                                     | 删除全部binlog日志，删除之后，日志编号，将从binlog.000001重新开始 |
| purge master logs to 'binlog.xxxxxx'             | 删除xxxxxx编号之前的所有日志                                 |
| purge master logs before 'yyyy-mm-dd hh24:mi:ss' | 删除日志为"yyyy-mm-dd hh24:mi:ss"之前产生的所有日志          |

可以在mysql的配置文件中配置二进制日志的过期时间，设置之后，二进制日志过期会自动删除（默认30天）

```sql
show variables like '%binlog_expire_logs_seconds%'
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

## （3）查询日志

查询日志中记录了客户端的所有操作，而二进制日志不包含查询数据的SQL语句。默认情况下，查询日志是不开启的。

```sql
show variables like '%general%'
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

修改配置文件开启查询日志：

```sql
#修改MySQL的配置文件/ect/my.cnf文件，添加如下内容
general_log=1   #开启查询日志，0关闭，1开启
general_log_file=mysql_query.log    #设置日志文件名，默认host_name.log
```

![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

## （4）慢查询日志

慢查询日志记录了所有执行时间超过指定参数（long_query_time，默认10s）的所有SQL语句的日志。

SHOW VARIABLES LIKE 'slow_query_log'; MySQL的慢查询日志是默认不开启的，需要在MySQL的配置文件（/ect/my.cnf）中配置如下信息：

![img](https://img-blog.csdnimg.cn/e661d2c2f6fe4160b1fa02227e46a812.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

 配置完毕之后，重新启动MySQL服务器进行测试，查看慢日志文件中记录的信息：/var/lib/mysql/localhost-slow.log。
