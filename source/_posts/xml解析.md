---
title: XML解析
date: 2023-7-15
tags: 
- 假期学习
categories: 学习
---

xml是一种可扩展标记语言，是用来定义其他语言的一种元语言，使用自定义的标签对文档进行描述。

xml解析是指将xml文件转化为程序可以处理数据结构的过程。

JAVA自身原生的解析方式：DOM解析和SAX解析

#### DOM解析

首先在内存中创建一个Document对象，然后把XML文档读取进来赋值给这个dom对象。由于dom对象是基于树结构的，所以对dom对象进行遍历即可。对内存中的dom对象可以进行查询、修改、删除操作，还可以写回原XML文档保存修改。

**优点：**

1、由于整棵树在内存中，因此可以对xml文档随机访问。

2、可以对xml文档进行修改操作。

**缺点：**

1、整个文档必须一次性解析完。

2、由于整个文档都要载入内存，对于大文档成本高。

**过程：**

1、创建DocumentBuilderFactory，由newInstance()方法获取工厂实例。

2、由工厂创建DocumentBuilder。

3、通过Document dom = builder.parse(file)读取xml文档创建dom对象。

4、通过dom对象的一系列方法获取某个节点。

5、通过NodeList对象获取节点列表中的某个节点。

6、通过Node对象读取节点属性。

7、获取结点的子节点列表。

8、获取结点值。

DOM解析XML文档，把元素、元素属性、元素值都看作Node类型，通过node.getNodeName()获取元素名、属性名，通过getNodeValue()获取属性值、元素值，通过getChildNodes()获取子节点们，通过item(i)获取第i个属性或者第i个子节点。

#### SAX解析

通过parse(file, listener)函数用一个listener对xml文档进行查找，按顺序读取文档，遍历每个标签，当发现目标标签时，读取标签的属性、结点值并返回。

**优点：**

1、无需将整个xml文档载入内存，因此消耗内存少。

2、可以继承ContentHandler创建多个执行不同查询的listener进行解析操作。

**缺点：**

1、不能随机的访问xml中的节点。

2、不能修改文档。

3、查询一次就要对xml文档从头到尾遍历一次。

**过程：**

1、创建解析工厂：SAXParserFactory factory = SAXParserFactory.newInstance();

2、由工厂创建解析器：SAXParser parser = factory.newSAXParser();

3、通过解析器的parse()方法，对指定xml文档以指定handler之类进行解析查询：parser.parse(xmlFile, new MySaxListener());

通过SAX解析xml文档是没有dom对象出现的，所以不会有node，不会有getNodeName()、getNodeValue()获取节点名、值。SAX解析XML文档的节点名是通过事件函数的参数qName获取的，属性是通过参数attributes的getValue("属性名")获取的，结点值是通过当前事件函数发生时，characters(char[] ch, int start, int length)方法中的内容获取的。

#### JDOM解析

JDOM方法是根据DOM方法的众多繁琐操作进行包装得到的。DOM方法解析XML文档其实是很繁琐的，而且很混乱，标签、属性、换行空格都当作节点类型来处理。JDOM方法定义了一系列通俗、好记的方法来解析XML，方法的底层封装了一系列DOM操作，但是我们不必亲自进行这些繁琐的操作。

**优点：**

查找方便，可以修改。

**缺点：**

装载整个文档，对内存容量要求高。

#### DOM4J解析

最初它是JDOM的一种智能分支，它合并了许多超出基本XML文档表示的功能，还提供了构建文档表示的选项，通过DOM4J API和标准DOM接口具有并行访问功能。DOM4J是一个非常优秀的Java XML API，具有性能优异、功能强大和极端易用使用的特点，同时它也是一个开放源代码的软件。
