---
title: vector
date: 2022-10-18
tags: 
- 源码
categories: 学习

---

Vector是基于数组实现的随机访问的同步的List结构，其public方法都是加锁的（加锁后不再需要临时变量保持原子性）

<!--More-->

## Vector的继承关系:

```java
public class Vector<E>
    extends AbstractList<E>
    implements List<E>, RandomAccess, Cloneable, java.io.Serializable
```

继承了 AbstractList 抽象类，实现了 List 接口，实现了 RandomAccess, Cloneable, java.io.Serializabl e接口，所以支持快速访问、复制(拷贝)、序列化。

查和改操作速度非常快【时间复杂度：O(1)】,增和删操作相对较慢【时间复杂度：最快O(1)最慢O(n)】。

相比于 ArrayList 其效率低，因为加入了 synchronized 操作。

#### Synchronized:

线程安全是并发编程中的重要关注点，应该注意到的是，造成线程安全问题的主要诱因有两点:

- 一是存在共享数据(也称临界资源)
- 二是存在多条线程共同操作共享数据

为了解决这个问题，我们可能需要这样一个方案，当存在多个线程操作共享数据时，需要保证同一时刻有且只有一个线程在操作共享数据，其他线程必须等到该线程处理完数据后再进行，这种方式有个高尚的名称叫互斥锁，即能达到互斥访问目的的锁，也就是说当一个共享数据被当前正在访问的线程加上互斥锁后，在同一个时刻，其他线程只能处于等待的状态，直到当前线程处理完毕释放该锁。在 Java 中，关键字 synchronized可以保证在同一个时刻，只有一个线程可以执行某个方法或者某个代码块(主要是对方法或者代码块中存在共享数据的操作)，同时我们还应该注意到synchronized另外一个重要的作用，synchronized可保证一个线程的变化(主要是共享数据的变化)被其他线程所看到（保证可见性，完全可以替代Volatile功能），这点确实也是很重要的。

synchronized 是悲观锁的实现，因为 synchronized 修饰的代码，每次执行时都会进行加锁操作，同时只允许一个线程进行操作，所以它是悲观锁的实现。

synchronized 是非公平锁，并且是不可设置的。这是因为非公平锁的吞吐量大于公平锁，并且是主流操作系统线程调度的基本选择，所以这也是 synchronized 使用非公平锁原因。

同时，synchronized是一个典型的可重入锁，可重入锁最大的作用是避免死锁。

**三大特性：**
**synchronized保证原子性：**
1.通过monitorenter和monitorexit指令，可以保证被synchronized修饰的代码在同一时间只能被一个线程访问，在锁未释放之前，无法被其他线程访问到。
2.即使在执行过程中，由于某种原因，比如CPU时间片用完，线程1放弃了CPU，但是它并没有进行解锁。而由于synchronized的锁是可重入的，这就保证下一个时间片还是只能被他自己获取到，还是会继续执行代码。直到所有代码执行完为止。

**synchronized保证可见性：**
对于一个被synchronized修饰的变量，在其解锁之前，必须先把此变量同步回主存当中。

**synchronized保证有序性：**
 尽管synchronized无法禁止指令重排和处理器优化，但是可以通过单线程机制来保证有序性。由于synchronized修饰的代码，在同一时刻只能被同一线程访问，从根本上避免了多线程的情况。而单线程环境下，在本线程内观察到的所有操作都是天然有序的，所以synchronized可以通过单线程的方式来保证程序的有序性。

## LinkList主要方法分析：

#### （一）字段

```java
//储存Vector元素的数组
protected Object[] elementData;

/**
 * Vector元素的数量
 */
protected int elementCount;

/**
 * Vector扩容增加的容量
 */
protected int capacityIncrement;

private static final int MAX_ARRAY_SIZE = Integer.MAX_VALUE - 8;

private static final long serialVersionUID = -2767605614048989439L;
```

#### （二）构造方法

```java
//有参构造函数
public Vector(int initialCapacity, int capacityIncrement) {
    super();
    if (initialCapacity < 0)  //如果容量不合法，则抛出非法参数异常
        throw new IllegalArgumentException("Illegal Capacity: "+
                                           initialCapacity);
    this.elementData = new Object[initialCapacity]; //设置新数组
    this.capacityIncrement = capacityIncrement;  //赋值增加的容量
}

/**
 * 有参构造方法，initialCapacity数组容量，调用另一个有参构造
 */
public Vector(int initialCapacity) {
    this(initialCapacity, 0);
}

/**
 * 无参构造方法，调用一个有参构造方法，容量设为10
 */
public Vector() {
    this(10);
}

/**
 * 有参构造方法，构造指定列表内的元素
 */
public Vector(Collection<? extends E> c) {
    Object[] a = c.toArray();  //将集合转化为数组
    elementCount = a.length;  //赋值元素数量
    if (c.getClass() == ArrayList.class) {  //如果c的类型是ArrayList，则直接对elementData赋值
        elementData = a;
    } else {
        elementData = Arrays.copyOf(a, elementCount, Object[].class); //如果不是，进行转化
    }
}
```

#### （三）常用方法

**扩容算法：**

```java
//外部可以调用的方法
public synchronized void ensureCapacity(int minCapacity) {
    if (minCapacity > 0) {
        modCount++;	 //修改次数加一
        ensureCapacityHelper(minCapacity);  //调用ensureCapacityHelper()方法
    }
}

private void ensureCapacityHelper(int minCapacity) {
    // overflow-conscious code
    if (minCapacity - elementData.length > 0)  //如果最小长度大于数组长度，进行扩容
        grow(minCapacity);
}

private void grow(int minCapacity) {
    // overflow-conscious code
    int oldCapacity = elementData.length;
/*
如果capacityIncrement > 0，则每次扩容增加capacityIncrement，否则，容量翻倍
*/
    int newCapacity = oldCapacity + ((capacityIncrement > 0) ?
                                     capacityIncrement : oldCapacity);
  //如果新容量还是小于最小容量，则容量取最小容量
    if (newCapacity - minCapacity < 0)
        newCapacity = minCapacity;
     //如果扩容的容量大于整型的最大值，则进行异常处理或者赋值为整型最大值
    if (newCapacity - MAX_ARRAY_SIZE > 0)
        newCapacity = hugeCapacity(minCapacity);
    elementData = Arrays.copyOf(elementData, newCapacity); 
    //调用Arrays.copyOf() 创建一个新的数组并将数据拷贝到新数组中，最后让 elementData 进行引用
}

private static int hugeCapacity(int minCapacity) {
    if (minCapacity < 0) //如果最小容量小于0，抛出内存溢出异常
        throw new OutOfMemoryError();
        //如果最小容量大于最大容量，取Integer最大值，否则取最大容量
    return (minCapacity > MAX_ARRAY_SIZE) ? 
        Integer.MAX_VALUE :
    MAX_ARRAY_SIZE;
}

```

一般情况下，扩容分为两种情况，第一种是初始化Vector指定capacityIncrement，且为正数，则每次扩容增加capacityIncrement；另一种情况是，初始化未指定capacityIncrement，则每次扩容的容量翻倍。

**转为数组：**

```java
public synchronized void copyInto(Object[] anArray) {
    System.arraycopy(elementData, 0, anArray, 0, elementCount);
}
public synchronized Object[] toArray() {
    return Arrays.copyOf(elementData, elementCount);
}
public synchronized <T> T[] toArray(T[] a) {
    if (a.length < elementCount)
        return (T[]) Arrays.copyOf(elementData, elementCount, a.getClass());

    System.arraycopy(elementData, 0, a, 0, elementCount);

    if (a.length > elementCount)
        a[elementCount] = null;

    return a;
}
```

大多数的方法实现思路与ArrayList如出一辙，Vector和ArrayList都是操作数组来实现列表，因此其实现的逻辑基本一致。

## 常见题

#### （1）ArrayList和Vector的区别？

**相同点：**

都实现了List接口。

底层数据结构都是数组。

**不同点：**

Verctor使用了Synchronized关键字来实现线程同步，所以线程是安全的，而ArrayList是线程不安全的。

在性能方面，因为Verctor很多方法使用了Synchronized关键字进行了加锁操作，所以性能不如ArrayList。

在扩容的时候，ArrayList扩容到原来的1.5倍，而Verctor扩容到原来的2倍。

Vector可以设置增长因子，而ArrayList不可以。

#### （2）为什么不推荐使用Verctor？

Verctor每个操作方法都加的有synchronized关键字，针对性能来说会比较大的影响，导致它性能很差。
