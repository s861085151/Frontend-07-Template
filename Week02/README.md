<!--
 * @Author: your name
 * @Date: 2020-12-06 22:11:20
 * @LastEditTime: 2020-12-13 21:55:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /极客时间/Frontend-07-Template/Week02/README.md
-->
# 学习笔记
1. 复习类(class)的创建及使用
2. 初步明白了';'在js文件中的重要性, 以后会慢慢将以前不加分号的习惯改正
3. 了解了广度优先搜索, 队列，栈, 堆区别及其对应的数组的实现方式
    #### 栈（stack） 先进后出，后进先出
    <font color=red>只有一个出入口</font>

    (比如一个密闭的通道，出去时，只能后进去的先出来，先进去的后出来)
    ![avatar](https://img2018.cnblogs.com/blog/1028513/201902/1028513-20190212171914206-1645974025.jpg)
    ```
    var arr = [1, 2, 3, 4, 5];
    arr.push(6); // 存入数据 arr -> [1, 2, 3, 4, 5, 6]
    arr.pop();   // 取出数据 arr -> [1, 2, 3, 4, 5]
    ```
    #### 堆（heap）key-value
    (是一种key-value的存储方式，使用key值就可以轻松的找到所需要的值)

    <font color=red>"堆的存取方式跟顺序没有关系，不局限出入口"。</font>

    #### 队列（queue）先进先出
    <font color=red>有一个入口，一个出口</font>

    (排队取餐、买票等)

    ![avatar](https://img2018.cnblogs.com/blog/1028513/201902/1028513-20190212172311256-626494157.jpg)
    ```
    var arr = [1, 2, 3, 4, 5];
    arr.push(6);  // 存入数据 arr -> [1, 2, 3, 4, 5, 6] 
    arr.shift();  // 取出数据 arr -> [2, 3, 4, 5, 6] 
    ```
    博客地址https://www.cnblogs.com/slly/p/10366290.html
4. 初步实现了启发式搜索(由于工作时间问题，暂时无法用栈的方式进行优化, 这里做标记)