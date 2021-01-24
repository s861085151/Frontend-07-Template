
## HTTP总结
 * 1. 设计一个HTTP请求类
 * 2. Content-Type 是一个必要的字段 需要有默认值
 * 3. body是一个key-value格式
 * 4. 不同的Content-Type影响body的格式


## send函数总结
 * 1. 在Request函数中搜集必要的信息
 * 2. 设计一个send函数，将请求发送到服务器
 * 3. send函数应该为异步的，所以返回一个Promise 

## 第三部发送请求
 * 1. 设计支持已有的connection或者自己新建的connection
 * 2. 收到数据传给parser
 * 3. 根据parser的状态resolve Promise
 */

## response状态码
 * 500系列
 * 404
 * 200  
 * 301 302 304



## bodyParser总结
 * Response的body可能根据Content-Type有不同的结构，因此我们会采用子parser的结构来解决问题
 * 以TrunkedParser为例，我们同样以状态机来处理body的格式


