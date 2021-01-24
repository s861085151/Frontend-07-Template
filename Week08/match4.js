/**
 * @param {*} 寻找字符串是否存在abcabx
 */

// 状态机逻辑
function match(str) {
  let state = start
  for (let c of str) {
    state = state(c);
  }
  return state === end;
}

console.log(match('abcabxff'))

function start(c) {
  if (c === 'a') {
    return findA
  }
  return start
}

function end() {
  return end
}

function findA(c) {
  if (c === 'b') {
    return findB
  }
  return start(c)
}

function findB(c) {
  if (c === 'c') {
    return findC
  }
  return start(c)
}

function findC(c) {
  if (c === 'a') {
    return findA2
  }
  return start(c)
}

function findA2(c) {
  if (c === 'b') {
    return findB2
  }
  return start(c)
}

function findB2(c) {
  if (c === 'x') {
    return end
  }
  return findB(c)
}


