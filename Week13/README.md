# CSSOM

1. document.styleSheets可以获取全部的样式（style标签、link引入的）
2. window.getComputedStyle(elt, preudoElt)
- elt：想要获取的元素
- preudoElt：(可选)伪元素
### 使用document.styleSheets修改css的好处
1. 可以批量修改
2. 伪元素是没有办法通过DOM API访问的 可以使用CSSOM去实现 

# Range API 

1. 使用使用range和fragement可以高效的处理dom

# CSSOM-VIEW 
### Window
1. window.innerWidth window.innerHeight 
2. window.outerWidth window.outerHeight 
3. window.devicePixelRatio 浏览器屋里像素/代码中px
- 正常情况下为1:1 Retina屏为1:2
4. window.screen
- window.screen.width
- window.screen.height
- window.screen.availWidth
- window.screen.availHeight
5. window.open() 打开一个新的浏览器窗口 

### Scroll
1. scrollTop
2. scrollLeft
3. scrollWidth
4. scrollHeight
5. scroll(x, y)
6. scrollBy(x, y)
7. scrollIntoView() 滚动到可视区域

### Layout
1. getElementRects()  获取元素生成的所有的盒
2. getBoundingClientRect()  
