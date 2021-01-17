# BNF
### 基本结构
```
<non-terminal> ::= <replacement>

// non-terminal 非终止符
// replacement 代替物， 用来进一步解释、定义未完成的。
// 终止符永远不会出现在左边。一旦我们看到了终止符，这个描述过程就结束了
```

### 法则
1.  ::= &nbsp;&nbsp;&nbsp; // 表示定义
2.  "" &nbsp;&nbsp;&nbsp; // 双引号里的内容表示字符
3.  <> &nbsp;&nbsp;&nbsp; // 尖括号里的内容表示必选内容
4.  | &nbsp;&nbsp;&nbsp; // 相当于or
5.  \+ &nbsp;&nbsp;&nbsp; //  最少一次
6.  \* &nbsp;&nbsp;&nbsp; // 重复多次

### 参考链接
  https://www.zhihu.com/question/27051306

### 练习心得
>::=类似于函数定义
```
// MultiplicativeExpression 
<MultiplicativeExpression>::=<BracketExpression>|
    <MultiplicativeExpression>"*"<Number>|
    <MultiplicativeExpression>"/"<Number>

// AddtiveExpression 
<AddtiveExpression>::=<MultiplicativeExpression>|
    <AddtiveExpression>"+"<MultiplicativeExpression>|
    <AddtiveExpression>"-"<MultiplicativeExpression>

// 带括号(目前不知是否正确)
<BracketExpression>::=<Number>|"("<Number>|<AddtiveExpression>")"
```

### 特殊案例
```javascript
  2**1**2   //2   从右往左执行
```