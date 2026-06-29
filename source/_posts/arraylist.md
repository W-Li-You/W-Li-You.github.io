---
title: arraylist
date: 2022-10-13
tags: 
- 源码
categories: 学习
top_img: https://img-blog.csdnimg.cn/91f456de48c6412e81c0b5a95727009c.jpeg
cover: https://img-blog.csdnimg.cn/91f456de48c6412e81c0b5a95727009c.jpeg
top: 2
description: '最开始学习源码的时候总结的一些关于ArrayList的一些知识和题。'
swiper_index: 4
---

ArrayList 是一个用数组实现的集合，支持随机访问，元素有序且可以重复。ArrayList继承AbstractList 并且实现了List和RandomAccess，Cloneable, Serializable接口。

<!--More-->

## ArrayList继承关系：

![img](https://img-blog.csdnimg.cn/2f2ba4f144434a548342fe7997fe4338.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

```java
public class ArrayList<E> extends AbstractList<E>
        implements List<E>, RandomAccess, Cloneable, java.io.Serializable
```

#### **RandomAccess：**

![img](https://img-blog.csdnimg.cn/93ccf2e44b284bb19af3b02bd6e0c63f.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)

Linked并没有实现RandomAccess接口，RandomAccess接口是一个标志接口。

只要List集合实现这个接口，就能支持快速随机访问。随机访问就是表示我们可以在常量时间复杂度内访问数据，也就是时间复杂度是O(1)。而链表是不可以随机访问的，比如说我们想通过下标访问链表当中的某个数据，需要从头结点或者尾节点开始遍历，直到遍历到下标对应的数据，时间复杂度为O(n)。

当一个List拥有快速访问功能时，其遍历方法采用for循环最快速。而没有快速访问功能的List，遍历的时候采用Iterator迭代器最快速。

在这个类的JavaDoc中，描述了ArrayList的一些特征，主要如下：

允许 put null 值，会自动扩容；
size、isEmpty、get、set、add 等方法时间复杂度都是 O(1)；
是非线程安全的，多线程情况下，推荐使用线程安全类：Collections#synchronizedList；
增强 for 循环，或者使用迭代器迭代过程中，如果数组大小被改变，会快速失败，抛出异常。
JavaDoc中还提到了fail-fast机制，这个会在下面将迭代器时提到。

实现这个接口的一些类：

ArrayList，Vector，CopyOnWriteArrayList，RandomAccessSubList，UnmodifiableArrayList

#### Serializable：

这个接口主要用于序列化，所谓序列化就是能将对象写入磁盘，反序列化就是能够将对象从磁盘当中读取出来，如果想序列化和反序列化`ArrayList`的实例对象就必须实现这个接口，如果没有实现这个接口，在实例化的时候程序执行会报错。

#### Cloneable：

和serializable一样是标志接口。实现Cloneable接口那么实现Cloneable的类就能够调用clone这个方法，如果没有实现Cloneable接口就调用方法，则会抛出异常java.lang.CloneNotSupportedException。

(1)浅克隆（shallow clone），在拷贝一个对象时，对对象的基本数据类型的成员变量进行拷贝，但对引用类型的成员变量只进行引用的传递，并没有创建一个新的对象，当对引用类型的内容修改会影响被拷贝的对象。

(2)深克隆（deep clone），在拷贝一个对象时，除了对基本数据类型的成员变量进行拷贝，对引用类型的成员变量进行拷贝时，创建一个新的对象来保存引用类型的成员变量。

1.为什么Object类中的clone方法定义为protected，而不是public?

因为不是每个对象都可以被克隆的。Java的设计者故意强制子类在其对象可克隆的情况下重写表方法。

2.为什么clone方法不是定义在Cloneable接口中呢?

因为Java提供了一个本地方法来执行一个浅复制以克隆一个对象。由于接口中的方法是抽象的，该本地方法不能在接口中实现。因此，Java的设计者决定在Object类中定义和实现本地clone方法。

#### List：

这个接口主要定义了一些集合常用的方法让ArrayList进行实现，比如add，addAll，contains，remove，set，size，indexOf等等方法。

AbstractList，这个抽象类也实现了List接口里面的方法，并且为其提供了默认代码实现。

## ArrayList主要方法分析：

#### （一）字段

```java
/*
serialVersionUID属性是用来序列的标识符/反序列化的对象序列化类。我们使用serialVersionUID属性记住Serializable类的版本，以验证加载的类和序列化的对象是否兼容。
序列化运行时与每个可序列化的类关联一个版本号，称为serialVersionUID，在反序列化期间使用该版本号来验证序列化对象的发送者和接收者是否已加载了该对象的与序列化兼容的类。如果接收者为对象加载的类serialVersionUID与相应的发送者的类不同，则反序列化将导致 InvalidClassException。可序列化的类可以serialVersionUID通过声明一个serialVersionUID必须为static，final和type的字段来显式声明其自身long。不同类的serialVersionUID属性是独立的。因此，不同的类不必具有唯一的值。
如果可序列化的类未显式声明一个 serialVersionUID，则序列化运行时将根据serialVersionUID该类的各个方面为该类计算默认值。
*/
private static final long serialVersionUID = 8683452581122892189L;

/*
ArrayList 当中默认初始化容量，也就是初始化数组的大小。
 */
private static final int DEFAULT_CAPACITY = 10;
 
/*
用于空实例的共享空数组实例。
 */
private static final Object[] EMPTY_ELEMENTDATA = {};

/*
用于默认大小的空实例的共享空数组实例。 
们将其与EMPTY_ELEMENTDATA区分开来，以了解添加第一个元素时扩容多少。
无参构造函数 使用该数组初始化 与EMPTY_ELEMENTDATA的区别主要是区分作用，用来减少空数组的存在，优化内存使用 1.8后的优化
 */
private static final Object[] DEFAULTCAPACITY_EMPTY_ELEMENTDATA = {};


/*
存放具体数据的数组 ArrayList 底层就是使用数组进行存储的
 */
transient Object[] elementData;

/*
size 表示容器当中数据的个数 注意和容器的长度区分开来
 */
private int size;
```

private static final Object[] EMPTY_ELEMENTDATA = {};

private static final Object[] DEFAULTCAPACITY_EMPTY_ELEMENTDATA = {};

这两个是用来共享给空数组的，无参构造函数的空数组会用DEFAULTCAPACITY_EMPTY_ELEMENTDATA赋值，有参构造函数的空数组会用EMPTY_ELEMENTDATA赋值。

#### （二）构造方法

```java
/*
传入一个初始化容量，如果传入的数字大于零，则创建一个容量为 initialCapacity 的Object类型的数组
如果等于零，则引用一个空数组
因为容量不能小于零，所以当传入的数字小于零时，抛出一个异常
 */
public ArrayList(int initialCapacity) {
    if (initialCapacity > 0) {
        this.elementData = new Object[initialCapacity]; //构造数组
    } else if (initialCapacity == 0) {
        this.elementData = EMPTY_ELEMENTDATA; //引入空数组
    } else {
        throw new IllegalArgumentException("Illegal Capacity: "+
                                           initialCapacity);	//抛出异常
    }
}

/*
空参构造器，直接用DEFAULTCAPACITY_EMPTY_ELEMENTDATA
 */
public ArrayList() {
    this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;
}

/*
传入了一个集合，如果这个集合的为空，直接传一个空数组
不为空，就判断是不是一个数组，是的话直接拷贝到elementData
 */
public ArrayList(Collection<? extends E> c) {
    Object[] a = c.toArray();
    if ((size = a.length) != 0) {        //不为空
        if (c.getClass() == ArrayList.class) {
            elementData = a;
        } else {
            elementData = Arrays.copyOf(a, size, Object[].class);
        }
    } else {
        elementData = EMPTY_ELEMENTDATA; //集合为空，直接传一个空数组
    }
}
```

#### （三）常用方法

#### add：

放置新元素的时候没有进行任何的判断，所以ArrayList是允许null值的，且放置是没有加锁，使得ArrayList是线程不安全的。

```java
//直接将待添加的元素放在数组末尾
public boolean add(E e) {
/*
这个函数的主要目的是确保 elementData 的容量有 size + 1
否则存储数据的时候数组就会越界
*/
    ensureCapacityInternal(size + 1);  //扩容
//size 表示容器当中数据的个数 注意和容器的长度区分开来,加入数据之后 容器当中数据的个数也要 + 1
    elementData[size++] = e;
    return true;
}

//在要求的位置放置某个元素
public void add(int index, E element) {
/*
检查index位置是否可用,判断下是否超出数组范围，超出的话就会抛出IndexOutOfBoundsException异常
*/
    rangeCheckForAdd(index);
    ensureCapacityInternal(size + 1);//用ensureCapacityInternal()方法检查数组容量
//使用System.arraycopy方法将index位置及其之后的元素向后拷贝一个单位，再将待插入元素放置在index处即可。
    System.arraycopy(elementData, index, elementData, index + 1,
                     size - index);
    elementData[index] = element;
    size++;
}
```

<img src="https://img-blog.csdnimg.cn/img_convert/c067fed59830ddd05ca797cca4ded171.jpeg" alt="img" style="zoom: 67%;" />

#### ensureCapacityInternal（扩容部分的核心实现）:

<img src="https://img-blog.csdnimg.cn/img_convert/deb6bbc2d7011c18712266c978d3e9ee.png" alt="img" style="zoom: 67%;" />

```java
private static int calculateCapacity(Object[] elementData, int minCapacity) {
// 如果是无参构造的话，取默认长度和需求长度 minCapacity 中比较大的值
/*
该ArrayList是使用无参构造构建的，那么我们就需要返回DEFAULT_CAPACITY和minCapacity中较大的值。那么在第一次插入的时候，显然DEFAULT_CAPACITY较大，默认值为10，那么我们第一次插入，数组就会扩容为10。而使用有参构造参数为0的方法的话，在这一步返回的仅仅是1。
*/
    if (elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA) {
        return Math.max(DEFAULT_CAPACITY, minCapacity);
    }
    return minCapacity;
}

private void ensureCapacityInternal(int minCapacity) {
    //调用了ensureExplicitCapacity方法
    ensureExplicitCapacity(calculateCapacity(elementData, minCapacity));
}

private void ensureExplicitCapacity(int minCapacity) {
    modCount++; //将modCount自增一,这个表示容器发生改变的次数,它跟容器扩容没关系
    //如果最小的需求容量 minCapacity 大于现在容器当中数组的长度，则需要进行扩容
    if (minCapacity - elementData.length > 0)
        grow(minCapacity);//调用grow()方法将底层数组扩容到minCapacity
}

private void grow(int minCapacity) {
    int oldCapacity = elementData.length;
    // 新数组的长度为原数组的长度的1.5倍，右移一位相当于除以2
    int newCapacity = oldCapacity + (oldCapacity >> 1);
    // 如果新数组的长度，小于需要的最小的容量，则更新数组的长度为 minCapacity
    if (newCapacity - minCapacity < 0)
        newCapacity = minCapacity;
//将新的大小和MAX_ARRAY_SIZE的值比较，如果超过了这个值，那么newCapacity就会被赋为hugeCapacity()
    if (newCapacity - MAX_ARRAY_SIZE > 0)
        // 这个函数的主要目的是判断整数是否发生溢出
        newCapacity = hugeCapacity(minCapacity);
    // 将旧数组的元素拷贝到新数组即可
    elementData = Arrays.copyOf(elementData, newCapacity);
}

private static int hugeCapacity(int minCapacity) {
        if (minCapacity < 0) // 如果溢出，抛出异常
            throw new OutOfMemoryError();
/*
如果最少需要的值大于MAX_ARRAY_SIZE的话，就只会扩容到Integer.MAX_VALUE，否则就扩容到MAX_ARRAY_SIZE。这里就说明了ArrayList的容量上限为Integer.MAX_VALUE。如果达到了该值，就不会再为ArrayList分配空间。
*/
        return (minCapacity > MAX_ARRAY_SIZE) ?
            Integer.MAX_VALUE :
            MAX_ARRAY_SIZE;
    }
```

#### remove:

```java
//根据下标删除元素
public E remove(int index) {
    rangeCheck(index); //检查是否越界

    modCount++;  //将modCount自增一,这个表示容器发生改变的次数
    E oldValue = elementData(index); //获取要删除的元素

    int numMoved = size - index - 1; //判断数组后面还有多少元素
    if (numMoved > 0) //将删除元素后面的元素往前copy一份
        System.arraycopy(elementData, index+1, elementData, index,
                         numMoved);
    elementData[--size] = null; // 将最后一个元素设为null，可以进行垃圾回收了

    return oldValue;
}

//删除list中第一个等于o的元素
public boolean remove(Object o) {
    if (o == null) {
        for (int index = 0; index < size; index++)
            if (elementData[index] == null) {
                fastRemove(index); //调用fastRemove()删除指定下标的元素
                return true;
            }
    } else {
        for (int index = 0; index < size; index++)
            if (o.equals(elementData[index])) {
                fastRemove(index);
                return true;
            }
    }
    return false;
}

//私有方法，外部不能调用
private void fastRemove(int index) {
    modCount++;
    int numMoved = size - index - 1;
    if (numMoved > 0)
        System.arraycopy(elementData, index+1, elementData, index,
                         numMoved);
    elementData[--size] = null; // clear to let GC do its work
}
```



#### get:

```java
public E get(int index) {
    rangeCheck(index); //检查是否越界
    return elementData(index);
}

private void rangeCheck(int index) {
    if (index >= size) //越界抛出异常
    throw new IndexOutOfBoundsException(outOfBoundsMsg(index));
}

private String outOfBoundsMsg(int index) {
    return "Index: "+index+", Size: "+size;
}

E elementData(int index) {
    return (E) elementData[index];
}
```

## 相关问题：

#### （1）JDK1.7和JDK1.8下ArrayList()底层数组的默认长度？

jdk1.7时使用ArrayList的无参构造，初始化后的长度是10，jdk1.8时使用无参构造，构造一个空数组，初始长度是0。

#### （2） 如何复制某个ArrayList到另一个ArrayList中去？

使用clone()方法
使用ArrayList构造方法
使用addAll方法

#### （3）arraylist怎么保证线程安全？

<1>、使用Vector

<2>、使用Collections.synchronizedList()

<3>、使用CopyOnWriteArrayList，涉及线程安全的部分，是通过写时复制的方式来实现。它内部有个volatile数组来保持数据。在“添加/修改/删除”数据时，会先获取互斥锁，再新建一个数组，并将更新后的数据拷贝到新建的数组中，最后再将该数组赋值给volatile数组，然后再释放互斥锁。

1.在做修改操作的时候加锁

2.每次修改都是将元素copy到一个新的数组中，并且将数组赋值到成员变量array中。

3.利用volatile关键字修饰成员变量array，这样就可以保证array的引用的可见性，每次修改之前都能够拿到最新的array引用。

迭代器的弱一致性:弱一致性是指返回迭代器后，其他线程对list的增删改对迭代器是不可见的。

#### （4）ArrayList频繁扩容导致添加性能急剧下降，如何处理？

使用ArrayList时，可以使用有参构造方法根据业务实际指定集合大小，以减少扩容的次数，提高写入效率。

#### （5）Java集合的快速失败机制 “fail-fast”和安全失败机制“fail-safe”？

“fail-fast”是java集合的一种错误检测机制，当多个线程对集合进行结构上的改变的操作时，有可能会产生fail-fast机制。fail-fast机制并不保证在不同步的修改下一定会抛出异常，它只是尽最大努力去抛出，所以这种机制一般仅用于检测bug。

原理：迭代器在遍历时直接访问集合中的内容，并且在遍历过程中使用一个 modCount 变量。集合在被遍历期间如果内容发生变化，就会改变 modCount 的值。每当迭代器使用hashNext()/next()遍历下一个元素之前，都会检测 modCount 变量是否为 expectedmodCount 值，是的话就返回遍历；否则抛出异常，终止遍历。

“fail-safe”采用安全失败机制的集合容器，在遍历时不是直接在集合内容上访问的，而是先复制原有的集合内容，在拷贝的集合上进行遍历。

原理：基于拷贝内容的优点是避免了ConcurrentModificationException，但同样地，迭代器并不能访问到修改后的内容，即：迭代器遍历的是开始遍历那一刻拿到的集合拷贝，在遍历期间原集合发生的修改迭代器是不知道的。

场景：java.util.concurrent包下的容器都是安全失败，可以在多线程下并发使用，并发修改。

#### （6）扩容机制？

首先判断当前数组是不是空数组，如果是空数组，那么将数据由0扩容到需求长度minCapacity，此时有参构造生成的空数组扩容到1，无参构造扩容到10，因为在计算minCapacity时，如果是无参构造，取默认长度和需求长度 minCapacity 中比较大的值，返回10。如果是有参构造的空数组，minCapacity返回1。

如果不是空数组，创建一个长度为原来数组长度1.5倍的新数组，当新数组长度大于ArrayList数组定义的最大值后会调用hugeCapacity来进行判断。如果minCapacity已经大于Integer的最大值，也就是溢出为负数，那么抛出内存溢出异常。否则的话根据与MAX_ARRAY_SIZE的比较情况确定返回Integer的最大值还是MAX_ARRAY_SIZE。最后将旧数组的值用Arrays.copyOf（）方法拷贝到新数组。

#### （6）Iterator 和 ListIterator 有什么区别？

（1）Iterator可以在所有集合中使用，而ListIterator只能在List类型和其子类型中使用

（2）ListIterator和Iterator都有hasnext（）和next（）方法可以实现顺序向后遍历，但是ListIterator有hasPrevious（）方法和previous（）方法，可以实现逆向遍历，Iterator不可以。

（3）ListIterator有add（）方法，可以向List中添加对象，而Iterator不能。

（4）ListIterator可以定位当前索引的位置，next Index（）和previous Index（）可以实现，Iterator没用此功能。

（5）两个都可以实现删除操作，但是ListIterator可以实现对象的修改，set（）方法可以实现，Iterator不能修改。

#### （7）迭代器Iterator是什么？

Iterator是可以遍历集合的对象，为各种容器提供了公共的操作接口，隔离对容器的遍历操作和底层实现（解耦）。

迭代器是java23种设计模式之一，用于顺序访问集合对象的元素，无需知道集合对象的底层实现。

#### （8）Array和ArrayList的区别？

Array可以包含基本类型和对象类型，ArrayList只能包含对象类型。

Array大小是固定的，所以需要事前确定合适的空间大小。ArrayList的大小是动态变化的，在每次添加新的元素的时候都会检查内部数组空间是否足够。

ArrayList提供了更多的方法和特性，比如：all All（），removeAll（），iterator（）等。

对于基本数据类型，ArrayList使用自动装箱来减少编码工作量；而当处理固定大小的基本数据类型的时候，这种方式相对比较慢，这时候应该使用Array。
