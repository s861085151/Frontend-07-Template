# 学习笔记
# Proxy
### Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写(但是注意一般不要使用proxy，目前只有绝大多数的框架中才会使用它来完成一些拦截改变操作)

## 1.实现私有变量
```
var target = {
  name: 'poetries',
  _age: 22
}

var logHandler = {
  get: function(target,key){
    if(key.startsWith('_')){
      console.log('私有变量age不能被访问')
      return false
    }
    return target[key];
  },
  set: function(target, key, value) {
      if(key.startsWith('_')){
      console.log('私有变量age不能被修改')
      return false
    }
      target[key] = value;
  }
} 
var targetWithLog = new Proxy(target, logHandler);
 
// 私有变量age不能被访问
targetWithLog.name; 
 
// 私有变量age不能被修改
targetWithLog.name = 'others'; 
```
## 1.预警和拦截

  假设你不想让其他开发者删除 noDelete 属性，还想让调用 oldMethod 的开发者了解到这个方法已经被废弃了，或者告诉开发者不要修改 doNotChange 属性，那么就可以使用 Proxy 来实现
  
```
let dataStore = {  
  noDelete: 1235,
  oldMethod: function() {/*...*/ },
  doNotChange: "tried and true"
};

const NODELETE = ['noDelete'];  
const NOCHANGE = ['doNotChange'];
const DEPRECATED = ['oldMethod'];  

dataStore = new Proxy(dataStore, {  
    set(target, key, value, proxy) {
        if (NOCHANGE.includes(key)) {
            throw Error(`Error! ${key} is immutable.`);
        }
        return Reflect.set(target, key, value, proxy);
    },
    deleteProperty(target, key) {
        if (NODELETE.includes(key)) {
            throw Error(`Error! ${key} cannot be deleted.`);
        }
        return Reflect.deleteProperty(target, key);

    },
    get(target, key, proxy) {
        if (DEPRECATED.includes(key)) {
            console.warn(`Warning! ${key} is deprecated.`);
        }
        var val = target[key];

        return typeof val === 'function' ?
            function(...args) {
                Reflect.apply(target[key], target, args);
            } :
            val;
    }
});

// these will throw errors or log warnings, respectively
dataStore.doNotChange = "foo";  
delete dataStore.noDelete;  
dataStore.oldMethod();
```

## 2.抽离校验模块
让我们从一个简单的类型校验开始做起，这个示例演示了如何使用 Proxy 保障数据类型的准确性
```
let numericDataStore = {  
    count: 0,
    amount: 1234,
    total: 14
};

numericDataStore = new Proxy(numericDataStore, {  
  set(target, key, value, proxy) {
    if (typeof value !== 'number') {
      throw Error("Properties in numericDataStore can only be numbers");
    }
    return Reflect.set(target, key, value, proxy);
  }
});

// 抛出错误，因为 "foo" 不是数值
numericDataStore.count = "foo";

// 赋值成功
numericDataStore.count = 333;
```

# Range
## 官方: 接口表示一个包含节点与文本节点的一部分的文档片段。[MDN链接](https://developer.mozilla.org/zh-CN/docs/Web/API/Range)
## 自解: 其实就是一个可以表示范围的api

## 创建
  使用document.createRange()方法创建 Range
## Range.setStart()
  设置 Range 的起点。
## Range.setEnd()
  设置 Range 的终点。
## Range.getBoundingClientRect()
  返回一个 DOMRect 对象，该对象将范围中的内容包围起来；即该对象是一个将范围内所有元素的边界矩形包围起来的矩形