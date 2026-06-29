---
title: linklist
date: 2022-10-16
tags: 
- 源码
categories: 学习
---

LinkedList是一个双向链表的数据结构。

<!--More-->

## LinkList的继承关系:

LinkedList继承了AbstractSequentialList，从*Sequential*这个单词可以看出，该抽象类实现的是顺序访问的结构，因为可以推测可能和链表有关。ArrayList底层是由数组支持，而LinkedList是由双向链表实现的，其中的每个对象包含数据的同时还包含指向链表中前一个与后一个元素的引用。

![](https://img-blog.csdnimg.cn/img_convert/7c77b61e791b55845538c2215f60844f.png)

```java
public class LinkedList<E>
    extends AbstractSequentialList<E>
    implements List<E>, Deque<E>, Cloneable, java.io.Serializable
```

#### **AbstractSequentialList：**

<img src="https://img-blog.csdnimg.cn/50b0d46e8acf42fda6fe44d16a8fe55b.png" alt="img" style="zoom:50%;" />![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

AbstractSequentialList 是Java中位于 java.util 包下的一个抽象类，它继承了 AbstractList 类，，并实现了AbstractList没实现的get(int)方法。但是保留了listIterator(int)，获取迭代器方法。以最大限度地减少实现由“顺序访问”数据存储（如链表）接口所需的工作。对于随机访问数据（如数组），应优先使用 AbstractList
而非此类。

#### **Deque**：

这个接口，这个类名字的由来是“double ended queue”，也就是双向队列，即从头部和尾部都可以进行队列的操作。

![在这里插入图片描述](https://img-blog.csdnimg.cn/7c936d6fd9c5447dace493c2c7567193.png#pic_center)

## LinkList主要方法分析：

#### （一）字段

```java
//这个linklist的大小
transient int size = 0;

/**
 * 头结点，永远指向第一个元素
 */
transient Node<E> first;

/**
 * 尾节点，永远指向最后一个元素
 */
transient Node<E> last;

//节点
private static class Node<E> {
    E item; 
    Node<E> next; //指向后一个元素
    Node<E> prev; //指向前一个元素

    Node(Node<E> prev, E element, Node<E> next) {
        this.item = element;
        this.next = next;
        this.prev = prev;
    }
}
```

**transient关键字：**

transient是短暂的意思。对于transient 修饰的成员变量，在类的实例对象的序列化处理过程中会被忽略。 因此，transient变量不会贯穿对象的序列化和反序列化，生命周期仅存于调用者的内存中而不会写到磁盘里进行持久化。

**为什么要用transient关键字？**

在持久化对象时，对于一些特殊的数据成员（如用户的密码，银行卡号等），我们不想用序列化机制来保存它。为了在一个特定对象的一个成员变量上关闭序列化，可以在这个成员变量前加上关键字transient。

**transient的作用：**

transient是Java语言的关键字，用来表示一个成员变量不是该对象序列化的一部分。当一个对象被序列化的时候，transient型变量的值不包括在序列化的结果中。而非transient型的变量是被包括进去的。  注意static修饰的静态变量天然就是不可序列化的。

**transient使用总结:**

（1）一旦变量被transient修饰，变量将不再是对象持久化的一部分，该变量内容在序列化后无法被访问。

（2） transient关键字只能修饰变量，而不能修饰方法和类。注意，本地变量是不能被transient关键字修饰的。变量如果是用户自定义类变量，则该类需要实现Serializable接口。

（3）一个静态变量不管是否被transient修饰，均不能被序列化(如果反序列化后类中static变量还有值，则值为当前JVM中对应static变量的值)。序列化保存的是对象状态，静态变量保存的是类状态，因此序列化并不保存静态变量。

#### （二）构造方法

```java
/**
 * 无参构造方法
 */
public LinkedList() {
}

/**
 * 将集合变成一个双向链表linklist
 */
public LinkedList(Collection<? extends E> c) {
    this();
    addAll(c);
}
```

#### （三）常用方法

**add:**

```java
public boolean add(E e) {
    linkLast(e);
    return true;
}

 public void add(int index, E element) {
     checkPositionIndex(index); //检查索引是否越界

     if (index == size) //如果索引等于链表长度，则在尾节点后面插入
         linkLast(element);
     else
         linkBefore(element, node(index));
 }

private void checkPositionIndex(int index) {
    if (!isPositionIndex(index)) //检查是否可以插入
        throw new IndexOutOfBoundsException(outOfBoundsMsg(index));
}

private boolean isPositionIndex(int index) { //检查是否可以插入
    return index >= 0 && index <= size;
}

private String outOfBoundsMsg(int index) {
    return "Index: "+index+", Size: "+size;
}

//将节点插入链表尾部（最后一个节点后面）
void linkLast(E e) {
    final Node<E> l = last;//将尾节点的值赋值给l
    final Node<E> newNode = new Node<>(l, e, null);  //新建节点，以l为前驱节点
    last = newNode;
    if (l == null)
        first = newNode;
    else
        l.next = newNode;
    size++; //长度加一
    modCount++; //修好次数加一
}

//将节点插入链表头部（第一个结点前面）
private void linkFirst(E e) {
    final Node<E> f = first;  //将第一个节点的值赋值给f
    final Node<E> newNode = new Node<>(null, e, f); //新建节点，以头结点为后继节点
    first = newNode;		//将第一个节点赋值为新建节点
    if (f == null) //如果链表为空，最后一个尾节点也应该是新建的节点
        last = newNode;
    else
        f.prev = newNode; //如果链表不为空，将原先头节点的前驱节点设为新建节点
    size++; //长度加一
    modCount++; //修好次数加一
}

//在某个节点前插入
void linkBefore(E e, Node<E> succ) {
    // assert succ != null;
    final Node<E> pred = succ.prev;  //将succ节点的前驱节点赋值给pred
    final Node<E> newNode = new Node<>(pred, e, succ); //创建新节点
    succ.prev = newNode; //设新节点为succ的前驱节点
    if (pred == null) //如果原本succ的前驱节点为空，则可以认为插入后头节点就是新节点
        first = newNode;
    else
        pred.next = newNode; //否则，将pred的后继节点设为新节点
    size++; //长度加一
    modCount++; //修好次数加一
}
```

**addAll：**

```java
public boolean addAll(Collection<? extends E> c) {
    return addAll(size, c);
}

// 将集合从指定位置开始插入
public boolean addAll(int index, Collection<? extends E> c) {
    checkPositionIndex(index); //检查index是否在size之内

    Object[] a = c.toArray(); //将集合转化为数组
    int numNew = a.length;
    if (numNew == 0)  //如果数组长度为0，返回false
        return false;

    Node<E> pred, succ;  //得到插入节点的前驱节点和后继节点
    if (index == size) {	//如果插入节点为尾部，前驱节点就是last，后继节点就是null
        succ = null;
        pred = last;
    } else {			//否则，调用node获取后继节点，再获取前驱节点
        succ = node(index);
        pred = succ.prev;
    }

    for (Object o : a) {  //遍历数据将数据插入
        @SuppressWarnings("unchecked") E e = (E) o;
        Node<E> newNode = new Node<>(pred, e, null); //创建新节点
        if (pred == null)		//如果前驱节点是null，证明新节点就是头节点
            first = newNode;
        else
            pred.next = newNode;
        pred = newNode;  	//更新前驱节点为新节点
    }

    if (succ == null) { //如果后继节点为空，那么尾节点就是集合最后一个节点，即最后更新为pred的新节点
        last = pred;
    } else {	//否则，将后继节点与前面的节点连接起来
        pred.next = succ;
        succ.prev = pred;
    }

    size += numNew;	//扩大链表长度
    modCount++; //增加修改次数
    return true; //返回true
}
```

**remove：**

```java
//删除第一个元素
public E removeFirst() {  
    final Node<E> f = first; //获取第一个元素
    if (f == null)	//如果为空，抛出异常
        throw new NoSuchElementException(); //没有这样的元素异常
    return unlinkFirst(f); //调用unlinkFirst()方法对元素进行删除
}

private E unlinkFirst(Node<E> f) { //私有方法，只能类内调用
    // assert f == first && f != null;
    final E element= f.item;
    final Node<E> next = f.next; //获取f的后继节点赋值给next
    f.item = null;		//将f的值赋为空
    f.next = null; // 依靠GC回收
    first = next;  //将头节点赋值为f的后继节点next
    if (next == null) //如果后继节点为空，那么尾节点也为空
        last = null;
    else
        next.prev = null; //否则，将后继节点的前驱节点赋值为空
    size--;		//将链表长度减一
    modCount++;  //操作数加一
    return element;  //返回删除元素的值
}

public E removeLast() {//删除尾节点
    final Node<E> l = last;
    if (l == null)
        throw new NoSuchElementException();
    return unlinkLast(l);
}

public E pollLast() {  //删除尾节点
    final Node<E> l = last;
    return (l == null) ? null : unlinkLast(l);
}

private E unlinkLast(Node<E> l) {  //和删除头节点相似
    // assert l == last && l != null;
    final E element = l.item;
    final Node<E> prev = l.prev;
    l.item = null;
    l.prev = null; // help GC
    last = prev;
    if (prev == null)
        first = null;
    else
        prev.next = null;
    size--;
    modCount++;
    return element;
}

public boolean remove(Object o) {
    if (o == null) {
        for (Node<E> x = first; x != null; x = x.next) {  //遍历链表找到null
            if (x.item == null) {
                unlink(x);
                return true;
            }
        }
    } else {
        for (Node<E> x = first; x != null; x = x.next) {  //遍历链表找到o
            if (o.equals(x.item)) {
                unlink(x);
                return true;
            }
        }
    }
    return false;
}

unlink(Node<E> x) {		//删除一个元素x
    // assert x != null;
    final E element = x.item;
    final Node<E> next = x.next; //将节点的下一个位置赋值给next
    final Node<E> prev = x.prev;  //将节点的上一个位置赋值给prev

    if (prev == null) { //如果prev等于null，证明头节点为next
        first = next; 
    } else {    //否则上一个位置的后继节点为next，删除节点的前驱节点赋值为null
        prev.next = next;
        x.prev = null;
    }

    if (next == null) { //和前面相似
        last = prev;
    } else {
        next.prev = prev;
        x.next = null;
    }

    x.item = null;  //要删除的节点赋值为null
    size--;
    modCount++;
    return element;
}
```

 removeLast()在链表为空时将抛出NoSuchElementException，而pollLast()方法返回null。



**get:**

```java
public E get(int index) {
    checkElementIndex(index);
    return node(index).item; //调用node()方法
}
Node<E> node(int index) {		//这里采用了索引分开搜索的方法，缩小一半的搜寻量
    // assert isElementIndex(index);

    if (index < (size >> 1)) { //如果索引小于size的一半
        Node<E> x = first;
        for (int i = 0; i < index; i++) //for循环
            x = x.next;
        return x;
    } else {
        Node<E> x = last;
        for (int i = size - 1; i > index; i--)  //如果索引大于size的一半
            x = x.prev;
        return x;
    }
}
```





## 常见面试题

#### **（1）LinkedList 可以存储 null 值吗？元素可以重复吗？**

LinkedList 底层是由双向链表实现的，并且在添加元素的时候，没有对元素进行值校验，所以可以存储 null 值，并且存储的元素是可以重复的。

#### （2）LinkedList和ArrayList的相同点与不同点?

**相同点：**

都是List集合的实现类，允许出现重复的元素，元素有序。

都是不同步的，线程都不安全。

**不同点：**

ArratList集合的底层采用的是Object数组结构，LinkedList底层采用的是双向链表结构。

查询时，ArrayList实现了RandomAccess接口，支持随机访问，时间复杂度是O（1），LinkedList需要进行遍历，时间复杂度是O（n）。

在插入元素时，ArrayList插入和删除元素时，原数组该插入或者删除位置已经它之后的元素都要进行移位操作，时间复杂度都是O（n），而且增加的时候可能还会引起扩容。LinkedList只要遍历找到该索引在的位置然后改变指针指向即可，如果是添加到头节点前或者链表末尾的位置，时间复杂度就是O（1），如果是指定了索引位置，时间复杂度就是O（n），总体来讲LinkedList增加和删除时性能比ArrayList好。

空间占用方面，ArrayList存在一定的空间浪费，因为每次扩容都是以前的1.5倍。但是LinkedList每个元素都要存放它的前驱节点的位置和后继节点的位置，所以对每个元素的存储要比ArrayList消耗更大的空间。

ArrayList适合多读，增删少的情况，Linked适合少读，增删多的情况。

#### （3）LinkedList版本前后变化？

LinkedList在1.6时底层是带头节点的双向循环列表，在1.7之后是不带头节点的双向链表。
