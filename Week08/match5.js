/**
 * @param {*} 寻找字符串是否存在abababx
 */

// 状态机逻辑
// ab ab ab x   3组ab   
// 如果在1组/2组ab后没有找到对应的字符，
let COUNT = 3
function match(str) {
  let state = start
  for (let c of str) {
    state = state(c);
  }
  return state === end;
}
console.log(match('abababababx'))

function start(c) {
  if (c === 'a') {
    COUNT--
    return findA
  }
  COUNT = 3
  return start
}

function end() {
  return end
}


function findA(c) {
  if (c === 'b') {
    if (!!COUNT) {
      return start
    } else {
      return findX
    }
  }

  return start(c)
}

function findX(c) {
  if (c === 'x') {
    return end
  }
  return start(c)
}


