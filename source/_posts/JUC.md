---
title: JUC-共享模型之内存
date: 2023-03-26
tags: 
- 并发
categories: 学习 
---

### **JMM体现在以下几个方面**

原子性-保证指令不会受到线程上下文切换的影响

可见性-保证指令不会受cpu缓存的影响

有序性-保证指令不会受cpu指令并行优化的影响

### **可见性：**

```java
@Slf4j(topic = "JC")
public class JC {
    static boolean run=true;
    public static void main(String[] args) throws InterruptedException {
        Thread t=new Thread(()->{
            while (run){
                //...
            }
        });
        t.start();

        sleep(1);
        log.debug("停止t");
        run=false; //线程t并不会停止
    }
}
```

初始状态，t线程刚开始从主内存中读取run到自己的工作内存。

JIT编译器将run缓存到工作内存的高速缓存中，减少对主内存中run的访问，提高效率。

**解决办法**

```java
volatile static boolean run=true;
```

volatile（易变关键字）

它可以用来修饰成员变量和静态成员变量，他可以避免线程从自己的工作缓存中查找变量的值，必须到主存中获取它的值，线程操作volatile变量都是直接操作主存。

### 两阶段终止模式，Balking模式

```java
    private Thread monitorThread;

    private volatile boolean stop=false;

    rivate volatile boolean starting=false;

    public void start(){
        synchronized (this){
            if(starting){
                return;
            }
            starting=true;
        }
        monitorThread=new Thread(()->{
            while (true){
                if(stop){
                    log.debug("料理后事");
                    break;
                }
                try {
                    Thread.sleep(1000);
                    log.debug("执行监控记录");
                }catch (InterruptedException e){
                }
            }
        },"monitor");
        monitorThread.start();
    }

    public void stop(){
        stop=true;
        starting=false;
        monitorThread.interrupt();
    }
```

### 有序性-指令重排序优化

指令重排的前提是，重排指令不能影响结果。

```java
int num=0;
boolean ready=false; 
//volatile boolean ready=false;	禁止重排序，防止之前的指令被重排序

public void actor1(I_Result r){
    if(ready){
        r.r1=num+num;
    }else {
        r.r1=1;
    }
} //结束时r1结果可能会出现0

public void actor2(I_Result r){
    num=2;
    ready=true;//重排序可能将两个语句调换位置执行
}
```

### volatile原理

写屏障（sfence）保证在该屏障之前的，对共享变量的改动，都同步到主存当中。

读屏障（lfence）保证在该屏障之后的，对共享变量的读取，加载的是主存中最新数据。