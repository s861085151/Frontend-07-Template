/**
 * @param {*} 寻找字符串是否存在a 
 */
function match(str) {
  for (let c of str) {
    if (c === 'a') {
      return true
    }
  }
  return false;
}

console.log(match('cfad'))