/**
 * @param {*} 寻找字符串是否存在ab
 */
function match(str) {
  let findA = false
  for (let c of str) {
    if (c === 'a') {
      findA = true;
    } else if (findA && c === 'b') {
      return true;
    } else {
      findA = false;
    }
  }
  return false;
}

console.log(match('cfab'))
