# 学习笔记
## 1. 复习了正则表达式的基本语法

      + => 1/1个以上
      ? => 0/1
      * => 0/0个以上
## 2. 了解了正则的<font color=red size=5>exec()</font>语法

  ### exec() 方法用于检索字符串中的正则表达式的匹配。
  ### 1. 返回一个<font color=red>数组</font>，返回匹配到的结果，如果<font color=red>没有匹配到返回null</font>
  ### 2. 当 RegExpObject 是一个<font color=red>全局正则表达式【也就是加了g】</font>时，exec() 的行为就稍微复杂一些。它会在 RegExpObject 的 lastIndex 属性指定的字符处开始检索字符串 string。当 exec() 找到了与表达式相匹配的文本时，在匹配后，它将把 RegExpObject 的 lastIndex 属性设置为匹配文本的最后一个字符的下一个位置。这就是说，您可以通过反复调用 exec() 方法来遍历字符串中的所有匹配文本。当 exec() 再也找不到匹配的文本时，它将返回 null，并把 lastIndex 属性重置为 0。
  ### 3. 当 RegExpObject <font color=red>不是一个全局正则表达式【也就是没有加g】</font>时，exec() 找到了匹配的文本，则返回一个结果数组。否则，返回 null。此数组的第 0 个元素是与正则表达式相匹配的文本，第 1 个元素是与 RegExpObject 的第 1 个子表达式相匹配的文本（如果有的话），第 2 个元素是与 RegExpObject 的第 2 个子表达式相匹配的文本（如果有的话），以此类推。除了数组元素和 length 属性之外，exec() 方法还返回两个属性。index 属性声明的是匹配文本的第一个字符的位置。input 属性则存放的是被检索的字符串 string。在调用非全局的 RegExp 对象的 exec() 方法时，返回的数组与调用方法 String.match() 返回的数组是相同的。
  ### 4. <font color=red>RegExpObject的lastIndex</font>是可以手动修改赋值的，但是要注意一个问题，如果是<font color=red>没有加g</font>的情况下, RegExpObject的lastIndex虽然已经被修改，但是是没有效果的, 如下图所示
  ---没有加g效果---
  ![avatar](https://m.qpic.cn/psc?/V52yEmgP3QPMyz1BZO8t3HfcuX0eoV9r/bqQfVz5yrrGYSXMvKr.cqTFpYgS966AIoVrAR1eAz4f2nmTfCXVkc1S5c3pTDVIq3vU*RJUBsYFZGk8*2bZFHRqNAWWgxrzG.ETlYZr0bBk!/b&bo=kAiAAQAAAAADBzs!&rf=viewer_4)
  ---加g效果---
  ![avatar](https://m.qpic.cn/psc?/V52yEmgP3QPMyz1BZO8t3HfcuX0eoV9r/bqQfVz5yrrGYSXMvKr.cqQaow5KlWJTOE*7Qt4*K8gLl7d17aOX3gLITDTAfERDn4uxr7LQJo9ktoJjbKypCQ8jU8bRZSbX3lEWQ.rg1z5Y!/b&bo=xgiAAQAAAAADB20!&rf=viewer_4)
