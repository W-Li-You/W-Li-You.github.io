---
title: SpringMVC
date: 2022-03-26 23:43:12
tags: 
- 框架
categories: 学习
---

        在第四阶段学习过程中我的进度有点慢，学习任务结束的时候我还在整合ssm，主要是前面学习的时候没有怎么注意时间，再加上课有点多，进度就跟不上了。

<!--more-->

记录一下这个星期学习的关于SpringMVC的一些知识：

**1.SpringMVC**

M：即model模型是指模型表示业务规则。Model：Bean，Dao，Service等

V：即View视图是指用户看到并与之交互的界面。View：Html，jsp等

C：即controller控制器是指控制器接受用户的输入并调用模型和视图去完成用户的需求，控制器本身不输出任何东西和做任何处理。它只是接收请求并决定调用哪个模型构件去处理请求，然后再确定用哪个视图来显示返回的数据。Controller

**2.工作流程\(理解原理\)**

（1）web.xml

Dispatcher：这是SpringMVC的核心 请求分发器 前端控制器

\<load-on-startup>1\</load-on-startup>:启动级别：1和服务器一起启动

```XML

<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">

<!--  **配置Dispatcher**  -->
    <servlet>
        <servlet-name>springmvc</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
<!--  Dispatcher要绑定Spring的配置文件  -->
        <init-param>
            <param-name>contextConfigLocation</param-name>
            <param-value>classpath:springmvc-servlet.xml</param-value>
        </init-param>
        <load-on-startup>1</load-on-startup>
    </servlet>

<!--  /只匹配所有请求，不匹配jsp页面
      /*匹配所有的请求，包括jsp页面
  -->
    <servlet-mapping>
        <servlet-name>springmvc</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>
</web-app>
```
```

（2）springmvc-servlet 

处理映射器和处理适配器可以不配置，这里是为了更好的理解  
\<mvc:annotation-driven/> ：  
支持mvc注解驱动：  
                        在spring中一般采用\@RequestMapping注解来完成映射关系， 必须向上下文中注册DefaultAnnotationHandlerMapping和一个AnnotationMethodHandlerAdapter实例 这两个实例分别在类级别和方法级别处理，而annotation-driven配置帮助我们自动完成上述两个实例的注入 。

```XML
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
  https://www.springframework.org/schema/beans/spring-beans.xsd">

<!--  处理器映射器  -->
    <bean class="org.springframework.web.servlet.handler.BeanNameUrlHandlerMapping"/>
<!--  处理适配器  -->
    <bean class="org.springframework.web.servlet.mvc.SimpleControllerHandlerAdapter"/>

<!--  视图解析器 :模板引擎Thymeleaf Freemarker -->
    <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver" id="internalResourceViewResolver">
        <property name="prefix" value="/WEB-INF/jsp/"/>
        <property name="suffix" value=".jsp"/>
    </bean>

    <bean id="/hello" class="nice.controller.HelloController"/>

</beans>
```

（3）HelloController.java 

平时使用\@Controller注解，这里继承Controller类是为了更好地理解

```java
package nice.controller;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HelloController implements Controller {

    @Override
    public ModelAndView handleRequest(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws Exception {
        ModelAndView mv = new ModelAndView();
        //业务代码
        String result="HelloSpringMVC";
        mv.addObject("msg",result);
        //视图跳转
        mv.setViewName("test");
        return mv;
    }
}

```

关于Maven的一个网站:

        [Maven Repository: Search/Browse/Explore \(mvnrepository.com\)](https://mvnrepository.com/ "Maven Repository: Search/Browse/Explore (mvnrepository.com)")