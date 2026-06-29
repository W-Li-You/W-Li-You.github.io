---
title: 牛客周赛+div2
date: 2024-1-13
tags: 
- 比赛补题
categories: 算法
---

# 牛客周赛

## [ C.小红构造回文](https://ac.nowcoder.com/acm/contest/73760/C)

### 题目：

小红拿到了一个回文串，她希望你将这个回文串重排，使得重排后仍然是回文串且和原串不同。你能帮帮她吗？

### 思路：

取回文串的第一个字符，向后查找与这个字符不同的字符下标，如果查找到该字符串的一半（字符串为奇数时查找到字符串长度减一的一半）还没有找到不同的字符，则输出-1。如果找到了，就将该位置和他对应的字符分别和第一个字符，最后一个字符交换即可。

### 代码：

```java
import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner scan = new Scanner(System.in);
        String str = scan.next();
        int len = str.length();
        int n = len / 2;
        if(len % 2 == 1) {
            n--;
        }
        char c = str.charAt(0);
        int ind = 0;
        for(int i = 1;i <= n; i++) {
            if(str.charAt(i) != c) {
                ind = i;
            }
        }
        if(ind == 0) {
            System.out.println(-1);
            return;
        }
        char[] chars = str.toCharArray();
        chars[0] = chars[ind];
        chars[ind] = c;
        chars[len - 1] = chars[0];
        chars[len - 1 - ind] = chars[ind];
        StringBuilder sb = new StringBuilder("");
        for(char ch : chars) {
            sb.append(ch);
        }
        System.out.println(sb);
    }
}


```

## [D.小红整数操作](https://ac.nowcoder.com/acm/contest/73760/D)

### 题目：

小红拿到了两个正整数x,y，她可以进行以下两种操作：

1. 将两个数同时乘以a。
2. 若a既是x的因子，也是y的因子，则将两个数同时除以a。

 小红希望最终两个数都在[l,r]区间内。她想知道最终的x有多少种不同的取值方案？

### 思路：

因为可以同时进行1和2两种操作。

设n为x和y的最大公约数，则x可以分解为xt * n，y可以分解为yt * n，此时xt和yt都不能再进行2操作

此时任何x 和 y 进行1操作都得到 a * x和a * y，相当于a * n * xt和a * n * yt。

此时任何x 和 y 进行2操作都得到 xt 和 yt 的倍数。

可以看出，x和y无论进行多少次1和2操作，都会得到xt和yt的倍数。要求[l , r]区间中的可能数，可以求xt * a和yt * a的在区间内有多少种可能性。

### 代码：

```java
import java.io.*;
import java.util.*;
public class Main {
    public static void main(String[] args) throws IOException {
        Scanner scan = new Scanner(System.in);
        int x = scan.nextInt();
        int y = scan.nextInt();
        int l = scan.nextInt();
        int r = scan.nextInt();
        int max = (int)gcd(x, y);
        x = x / max;
        y = y / max;
        int xl1 = l / x;
        if(l % x != 0) xl1 ++;
        int xr1 = r / x;
        int yl1 = l / y;
        if(l % y != 0) yl1++;
        int yr1 = r / y;
        int res = Math.min(xr1, yr1)-Math.max(xl1, yl1)+1;
        System.out.println(res);
    }
    public static long gcd(long a, long b) {
        return (a % b == 0) ? b : gcd(b, a % b);
    }
}


```



## [E.小红树上染色](https://ac.nowcoder.com/acm/contest/73760/E)

### 题目：

小红拿到了一棵树，初始所有节点都是白色。
 小红希望染红若干个节点，使得不存在两个白色节点相邻。
 小红想知道，共有多少种不同的染色方案？
 由于答案过大，请对10^9+7取模。

### 思路：

比赛的时候没有想到用List<Integer>[]类，构造的时候写错了。如果a，b两个边相邻，就将a加入nums[b]的list中，b加入到nums[a]的list中。这样子nums[i]中存放的就是当前节点的所有相连节点。将第一个节点当成根节点，nums[i]就是下标为i的节点下的所有子节点。因为list中也包含当前节点的父节点，所以在遍历的时候要判断去掉父节点。

用dp的思想，开辟一个二维数组，`dp[i][0]`存放当前节点染红的方案数，`dp[i][1]`存放当前节点不染的方案数。可以得到`dp[i][0]`等于子节点染红+不染的方案数之积，`dp[i][1]`等于子节点染红的方案数之积。

### 代码：

```java
import java.io.*;
import java.util.*;

public class Main {
    static long[][] dp;
    static List<Integer>[] nums;
    static int M = (int)(1e9+7);
    public static void main(String[] args) throws IOException {
        Scanner scan = new Scanner(System.in);
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int n = Integer.parseInt(br.readLine());
        nums = new List[n + 1];
        for(int i = 0; i <= n; i++) {
            nums[i] = new ArrayList<>();
        }
        for(int i = 0; i < n - 1; i++) {
            String[] s = br.readLine().split(" ");
            int a = Integer.parseInt(s[0]);
            int b = Integer.parseInt(s[1]);
            nums[a].add(b);
            nums[b].add(a);
        }
        dp = new long[n + 1][2];
        dfs(1, -1);
        bw.write((dp[1][0] + dp[1][1]) % M + "");
        bw.flush();
        br.close();
        bw.close();
    }
    public static void dfs(int cur, int father) {
        dp[cur][0] = 1;
        dp[cur][1] = 1;
        List<Integer> lists = nums[cur];
        for(int i : lists) {
            if(i != father) {
                dfs(i, cur);
                dp[cur][0] = ((dp[i][0] + dp[i][1]) * dp[cur][0]) % M;
                dp[cur][1] = (dp[i][0] * dp[cur][1]) % M;
            }
        }
    }
}


```

# DIV2

## [B. A Balanced Problemset?](https://codeforces.com/contest/1925/problem/B)

### 思路：

要将x分成n份，并且该n份的最大公约数最大，每一份可以写成a1 * m, a2 * m, a3 * m,......,an * m。

可以看出，m也是x的最大公约数，x=（a1+a2+a3+...+an）* m。

如果想要使m最大，那就要使（a1+a2+a3+...+an）尽可能小，所以要求x中大于 n 最小的约数。

### 代码：

```java
import java.io.*;
import java.util.*;
 
public class Main {
    public static void main(String[] args) throws IOException {
        Scanner scan = new Scanner(System.in);
        int t = scan.nextInt();
        while (t-- > 0) {
            int x = scan.nextInt();
            int tr = x;
            int n = scan.nextInt();
            List<Integer> list = new ArrayList<>();
            for(int i = 2; i <= x/i; i++) {
                while (x % i == 0) {
                    list.add(i);
                    x = x / i;
                }
            }
            if(x != 1) list.add(x);
            int len = list.size();
            int[] dp=new int[len +1];
            dp[0] = 1;
            for(int i = 1; i <= len; i++) {
                dp[i] = list.get(i - 1);
            }
            int val = get(list, 0, n, 0, 1);
            System.out.println(tr/val);
        }
    }
    public static int get(List<Integer> list,int ind, int n, int min, int sum) {
        if(min != 0 && sum <= min && sum >= n) {
            return sum;
        }
        if(min != 0&& sum >= n) {
            return min;
        }
        if(min == 0 && sum >= n) {
            return sum;
        }
        for(int i = ind; i < list.size(); i++) {
            min = get(list, i + 1, n, min, sum * list.get(i));
        }
        return min;
    }
}
```

## [C. Did We Get Everything Covered?](https://codeforces.com/contest/1925/problem/C)

### 思路：

要判断字符串是否包含前k个字母组成的所有长度为n的字符串，将k个字母全部出现一次算成一遍，统计一共出现过几遍。如果没有达到n遍，那么就输出NO。

要找反例，每次统计的时候将每一遍最后出现的那个字符记录下来，这样子就保证反例下一个字母是在下一遍中出现的。因为统计的遍数没有达到n，所以当记录到最后已经记录的字符数量肯定是小于n的，而将字符串剩下的字符中没有出现的字母记录下来，只要这个字母在前面已经记录过的字母后面出现，这时字符串就不能构成这样子的序列。

### 代码：

```java
import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int t = Integer.parseInt(br.readLine());
        while (t-- > 0) {
            String[] s = br.readLine().split(" ");
            int n = Integer.parseInt(s[0]);
            int k = Integer.parseInt(s[1]);
            int m = Integer.parseInt(s[2]);
            String str = br.readLine();
            char[] chars = str.toCharArray();
            int[] nums = new int[k];
            int cur = 0;
            int count = 0;
            StringBuilder sb = new StringBuilder("");
            for(int i = 0; i < m; i++) {
                int ind = chars[i] - 'a';
                if(ind < k && nums[ind] == cur) {
                    nums[ind]++;
                    count++;
                    if(count == k) {
                        sb.append(chars[i]);
                        cur++;
                        count = 0;
                    }
                }
            }
            if(cur >= n) {
                bw.write("YES\n");
                continue;
            }
            bw.write("NO\n");
            char c = 'a';
            for(int i = 0; i < k; i++) {
                if(nums[i] == cur) {
                    c = (char) ('a'+i);
                }
            }
            for(int i = cur + 1; i <= n; i++) {
                sb.append(c);
            }
            bw.write(sb.toString()+"\n");
        }
        bw.flush();
        br.close();
        bw.close();
    }
}
```

