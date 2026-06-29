---
title: 中位数为key的子序列
date: 2023-03-19
tags: 
- 前缀和
categories: 算法
---

# [和为 K 的子数组](https://leetcode.cn/problems/subarray-sum-equals-k/)

给你一个整数数组 `nums` 和一个整数 `k` ，请你统计并返回 *该数组中和为 `k` 的连续子数组的个数* 。

**示例 1：**

```
输入：nums = [1,1,1], k = 2
输出：2
```

**示例 2：**

```
输入：nums = [1,2,3], k = 3
输出：2
```

 

**提示：**

- `1 <= nums.length <= 2 * 104`
- `-1000 <= nums[i] <= 1000`
- `-107 <= k <= 107`

**代码：**

```java
class Solution {

  public int subarraySum(int[] nums, int k) {

​    int n = nums.length, ans = 0;

​    int[] sum = new int[n + 10];

​    for (int i = 1; i <= n; i++) sum[i] = sum[i - 1] + nums[i - 1];

​    Map<Integer, Integer> map = new HashMap<>();

​    map.put(0, 1);

​    for (int i = 1; i <= n; i++) {

​      int t = sum[i], d = t - k;

​      ans += map.getOrDefault(d, 0);

​      map.put(t, map.getOrDefault(t, 0) + 1);

​    }

​    return ans;

  }

}
```

**思路：**

利用前缀和的思想，求出每一个元素到第一个元素的和，两个元素前缀和相减就是两个元素之间所有元素的和。

1、定义一个数组，用于存储所有元素的前缀和。

2、定义map集合，以前缀和为key

3、遍历sum，如果map中有（当前前缀和-k）为key的元素，就使得结果加上该key的value。再将当前元素前缀和存入map集合，如果不存在就存入0，存在就加一。



# [统计中位数为 K 的子数组](https://leetcode.cn/problems/count-subarrays-with-median-k/)

给你一个长度为 `n` 的数组 `nums` ，该数组由从 `1` 到 `n` 的 **不同** 整数组成。另给你一个正整数 `k` 。

统计并返回 `nums` 中的 **中位数** 等于 `k` 的非空子数组的数目。

**注意：**

- 数组的中位数是按递增顺序排列后位于中间的那个元素，如果数组长度为偶数，则中位数是位于中间靠左的那个元素。
  - 例如，`[2,3,1,4]` 的中位数是 `2` ，`[8,4,3,5,1]` 的中位数是 `4` 。
- 子数组是数组中的一个连续部分。

 

**示例 1：**

```
输入：nums = [3,2,1,4,5], k = 4
输出：3
解释：中位数等于 4 的子数组有：[4]、[4,5] 和 [1,4,5] 。
```

**示例 2：**

```
输入：nums = [2,3,1], k = 3
输出：1
解释：[3] 是唯一一个中位数等于 3 的子数组。
```

 

**提示：**

- `n == nums.length`
- `1 <= n <= 105`
- `1 <= nums[i], k <= n`
- `nums` 中的整数互不相同

**代码：**

```java
class Solution {
    public static int countSubarrays(int[] nums, int k) {
        int n=nums.length;
        int t=n+1;
        int pos=0;
        while (nums[pos] != k) ++pos;
        Map<Integer, Integer> map=new HashMap<>();
        map.put(0,1);
        int res=0;
        int count=0;
        for(int i=0;i<n;i++){
            if(nums[i]>k){
                count+=1;
            }else if(nums[i]<k){
                count+=-1;
            }else {
                count+=t;
            }
            if(i>=pos){
                res+=map.getOrDefault(count-t,0);
                res+=map.getOrDefault(count-t-1,0);
            }
            else{
                map.put(count,map.getOrDefault(count,0)+1);
            }
        }
        return res;
    }
}
```

**思路：**

这个思路和上面那道题思路差不多，求中位数为k的子序列，可以将大于k的元素都设为1，小于k的元素都设为-1，将等于k的元素都设为t，和为t或者t+1的序列排序后中位数就为key。注意t要大于序列的长度，否则当为一的元素多的话和也会为t。

1、遍历数组，找到值为k的元素的下标。

2、声明一个map，以前缀和为key，该前缀和出现的次数为value。

3、遍历数组，当元素大于k时前缀和加一，小于时加0，等于时加t。

4、进行比较，如果当前元素下标小于所找的元素下标，证明该元素前面所有子序列没有k出现，直接将前缀和存入map加一就行。如果大于所找元素下标，寻找有没有符合当前前缀和-t的map，将结果加上该key的value。

