# js animation 的几种方法

## 1. setInterval
```
setInterval(() => { }, 16);
```
## 2. setTimeout
```
setTimeout(() => { }, 16);

let tick = () => {
  setTimeout(tick, 16)
}
```
 
## 3. requestAnimationFrame
```
let tick = () => {
  let handler = requestAnimationFrame(tick);
  cancelAnimationFrame(handler) // cancel requestAnimationFrame 避免资源的浪费
}
```