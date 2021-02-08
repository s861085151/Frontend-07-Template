# layout

## 第一步总结
 * 1. 预处理工作(处理flex-direction和wrap相关属性的工作，以及相关属性的初始化和赋值工作)
 
## 第二步总结（分行）
 * 1. 根据主轴尺寸，将元素进行分行
 * 2. 如果设置了no-wrap，则强行分配进第一行 

## 第三部总结（计算主轴方向）
 * 1. 找出所有的flex元素
 * 2. 把主轴方向剩余尺寸按比例分配给这些元素
 * 3. 若剩余空间为负数，所有flex元素为0，等比压缩剩余元素

## 第四步总结（计算交叉轴方向）
 * 1. 根据每一行最大元素尺寸计算行高
 * 2. 根据行高flex-align和item-align，确定元素具体位置

## 第五步总结
 * 1. 属性值分为单引号、双引号、无引号，因此需要较多的状态处理
 * 2. 处理属性的方式和标签类似（创建一个全局变量去暂存）
 * 3. 在属性结束时，将属性加到标签token上

## 第六步总结
 * 1. 标签构建dom树的基本技巧是使用栈
 * 2. 遇到开始标签，创建入栈；遇到结束标签，出栈
 * 3. 自封闭的节点视为入栈后立刻出栈
 * 4. 任何元素的父元素都是它入栈前的栈顶元素

## 第七步总结
 * 1. 文本节点与自封闭标签处理类似
 * 2. 多个文本节点需要合并
 * 3. 自封闭的节点视为入栈后立刻出栈
 * 4. 任何元素的父元素都是它入栈前的栈顶元素



# CSS computing

## 第一步总结
 * 1. 遇到style标签，我们吧css规则保存起来
 * 2. 这个我们调用css parser来分析css规则
 * 3. 这里我们必须要仔细研究css库分析css规则的格式

## 第二步总结
 * 1. 当我们创建一个元素后，立即计算css
 * 2. 理论上当我们分析一个元素时，所有css规则已经搜集完毕
 * 3. 在真实的浏览器中，可能遇到写在body的style标签，需要重新计算css计算的情况，这里我们忽略

## 第三步总结
 * 1. 在computedCSS这个函数中，我们必须知道元素的所有父元素才能判断元素与规则是否匹配
 * 2. 我们从上一个步骤的stack，可以获取本元素的所有父元素 
 * 3. 因为首先获取的肯定是”当前元素“，所以我们获得和计算父元素匹配的顺序是从内到外 

## 第四步总结
 * 1. 选择器也要从当前选择器从内向外排列
 * 2. 复杂选择器拆成针对单个元素的选择器，用循环匹配父元素队列
 * 3. 因为首先获取的肯定是”当前元素“，所以我们获得和计算父元素匹配的顺序是从内到外 
 
## 第五步总结
 * 1. 根据选择器的类型和元素属性，计算是否与当前元素匹配
 * 2. 这里仅仅实现了三种基本选择器，实际的浏览器中要处理复合选择器
 * 3. 因为首先获取的肯定是”当前元素“，所以我们获得和计算父元素匹配的顺序是从内到外 

## 第六步总结
 * 1. 一旦选择匹配，就应用选择器到元素上，形成computedStyle
 * 2. 这里仅仅实现了三种基本选择器，实际的浏览器中要处理复合选择器
 * 3. 因为首先获取的肯定是”当前元素“，所以我们获得和计算父元素匹配的顺序是从内到外 

## 第七步总结
 * 1. css规则根据specificity和后来的优先规则覆盖
 * 2. specificity是一个四元组，越左边权重越高
 * 3. 一个css规则的specificity根据包含的简单的选择器相加而成
