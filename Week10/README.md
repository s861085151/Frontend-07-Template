
# 第八周笔记

# 了解浏览器的渲染流程
  ![avatar](https://m.qpic.cn/psc?/V52yEmgP3QPMyz1BZO8t3HfcuX0eoV9r/bqQfVz5yrrGYSXMvKr.cqQtF6AfKh*1Zcqodzx7tUJm97Tn*SPT4qeXjbudAcifLqgyx0mwrZ.xffp.c7VEaSM51I*wdWqn6B2pgzc0zJGw!/b&bo=wgowAQAAAAADB9s!&rf=viewer_4)
### URL--HTTP-->HTML--parse-->DOM--css computing-->DOM with css--layout--> DOM with position--render-->Bitmap

# 状态机

# server
### 复习了一次server服务的基本搭建

# toy-brower
### 了解了基础的http从请求到结果返回基本的流程，以及使用状态机的基本实现

# HTTP状态码
### 200: 请求成功。一般用于GET与POST请求

### 301: 永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替

### 302: 临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI

### 304: 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源(访问缓存)

### 404: 服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面(也就是通常说的404页面)

### 500: 服务器内部错误，无法完成请求




# 第九周笔记

### 对HTML和css的解析计算过程有了简单的了解

### 见到了四元组这样的解析方法

### 跟随winter的教程, 对于从零到代码完成的过程有了新的理解, 从一而终，疏而不漏，不紧不慢
（大白话就是先搞清楚逻辑，winter的很多代码都是第一次听迷迷糊糊的，必须得亲自写一次才会想明白）


# 第十周笔记
