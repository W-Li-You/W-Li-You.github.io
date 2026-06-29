---
title: String,StringBuilder,StringBuffer
date: 2022-09-15
tags: 
- java基础
categories: 学习
---

区别：

<!--more-->

**1，是否可变**

String对象创建后，一旦初始化就不能修改，因为String类中的所有数据都是常量。对String类的任何改变，都返回一个新的String类对象，效率低，浪费内存空间。

StringBuilder和StringBuffer的对象是可变的。

StringBuilder：是在Java5中被提出来的。StringBuilder是一个可变的字符序列，可以用append()方法进行对字符串的追加，insert()插入，StringBuilder的原理和StringBuffer一样，但是线程是不安全的。

StringBuffer：StringBuffer是使用缓冲区的，本身也是操作字符串，但与String类不同，String类中的内容一旦声明就无法改变，改变的只是其内存地址的指向。但是StringBuffer中的内存是可以改变的。append()追加方法，reverse()反转，replace()代替，delete()删除，insert()插入。

**2，构造**

String类是引用数据类型

StringBuilder和StringBuffer本身是一个具体的操作类，所以不能像String那样用直接赋值的方法进行对象实例化，必须要通过构造方法来完成。（为了获得更好性能，在构造StringBuilder和StringBuffer时要指定其容量，当不指定容量时会默认构造一个容量为16的对象）

**3，线程与速度**

StringBuilder在大多数实现中比StringBuffer快，将StringBuilder用于多个线程是不安全的（不能同步访问），但是在单个线程里StringBuilder比StringBuffer性能好。

StringBuffer线程是安全的。

StringBuilder相对于StringBuffer有速度优势，所以一般情况下推荐使用StringBuilder，但是在程序要求线程安全的情况下必须使用StringBuffer。

速度：StringBuilder>StringBuffer>String