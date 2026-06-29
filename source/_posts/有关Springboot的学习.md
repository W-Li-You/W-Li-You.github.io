---
title: 有关Springboot的学习
date: 2022-05-14 21:03:33
tags: 
- 框架
categories: 学习
---

        由于疫情原因，这一周的学习是在宿舍中进行的。说实话我的自制力不是很高，所以这一星期的学习进度有点慢。

<!--more-->

        在上一阶段我们写项目的时候使用的是ssm框架，这一阶段我们要把ssm框架换成SpringBoot框架。SpringBoot提供了全新的框架。在学习ssm的时候我最头疼的事情就是配置文件了，一不小心配置就会出问题。在学习了SpringBoot之后就再也没有这个烦恼了，同时也不用导入很多很多的依赖。相比之下，SpringBoot真的是比ssm简单很多，但是SpringBoot的集成度高，不容易了解它的底层。

**SpringBoot的优点：**

简化的Maven配置：Spring提供推荐的基础 POM 文件来简化Maven 配置。

自动配置Spring：Spring Boot会根据项目依赖来自动配置Spring 框架，极大地减少项目要使用的配置。

无代码生成和[xml](https://so.csdn.net/so/search?q=xml&spm=1001.2101.3001.7020 "xml")配置：Spring Boot不生成代码。完全不需要任何xml配置即可实现Spring的所有配置。

```XML
<parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.4.5</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-configuration-processor</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-thymeleaf</artifactId>
        </dependency>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <scope>test</scope>
        </dependency>
        <!-- 整合mybatis -->
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
            <version>2.2.2</version>
        </dependency>
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <scope>runtime</scope>
        </dependency>
      

    </dependencies>
```

** yaml**

      在学习SpringBoot的过程中还学习了yaml文件：在SpringBoot[框架](https://so.csdn.net/so/search?q=%E6%A1%86%E6%9E%B6&spm=1001.2101.3001.7020 "框架")中，resource文件夹里可以存放配置的文件有两种：properties和yml（yaml）。

        优先级：properties>yml