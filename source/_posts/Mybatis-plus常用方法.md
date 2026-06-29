---
title: Mybatis-plus常用方法
date: 2022-07-02 21:55:21
tags: 
- 数据库
categories: 学习
---

mybatis-plus

<!--more-->

### 增加：

**int insert\(entity\)**：插入单条数据，返回值为int

```java
userMapper.insert(user);
```

### 删除：

**int deleteById\( id\)：**通过id进行删除

```
userMapper.deleteById(userId);
```

**int deleteBatchIds\(Collection\<\? extends Serializable> idList\)**：通过id删除多个表的内容

```
userMapper.deleteBatchIds(Arrays.asList(id));
//Integer[] id
```

### 更新：

**updateById`(`entity`)`：**通过id更新表的内容

```java
userMapper.updateById(user);
```

查询：

**T selectById（entity）：**根据主键id查询

```java
 User user=userMapper.selectById(userId);
```

**T selectOne\(Wrapper\<T> queryWrapper\)**： 根据实体类封装对象 查询一条记录

```java
QueryWrapper<User> queryWrapper = new QueryWrapper<>();
queryWrapper.eq("user_account", userAccount);
userMapper.selectOne(queryWrapper);
```

**List\<T> selectList\(Wrapper\<T> queryWrapper\)：** 查询多条记录

```java
QueryWrapper<User> queryWrapper = new QueryWrapper<>();
queryWrapper.eq("user_authority",0);
userMapper.selectList(queryWrapper);
```

**selectPage（page，queryWrapper）：**查询多条记录结果分页

```java
IPage page=new Page(currentPage,pageSize);
userMapper.selectPage(page, queryWrapper);
```