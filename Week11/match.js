const dom = document.getElementById("title")
const selector = "div.root ul#content .row span#title.title"

console.log(match(selector, dom))

// 从后往前对比  空格即为一组  如果匹配完都没有匹配到 即为false
function match(selector, element) {
  let currentElement = null;
  const selectors = selector.split(/\s+/).reverse();
  currentElement = element;
  for (let s of selectors) {
    const rules = s.match(/(\.\w+)|(\#\w+)|(\w+)/g).reverse();
    for (let rule of rules) {
      if (rule.charAt(0) === '\#') {
        if (currentElement.id !== rule.substr(1)) {
          return false
        }
        continue
      }
      if (rule.charAt(0) === '\.') {
        if (currentElement.className !== rule.substr(1)) {
          return false
        }
        continue
      } else {
        if (currentElement.tagName.toLowerCase() !== rule) {
          return false
        }
        continue
      }
    }
    currentElement = currentElement.parentNode;
  }
  return true
}