/**
 * @param {*} 寻找字符串是否存在abcde
 */
{
  // 普通逻辑
  function match(str) {
    let findA = false;
    let findB = false;
    let findC = false;
    let findD = false;
    for (let c of str) {
      if (c === 'a') {
        findA = true;
      } else if (findA && c === 'b') {
        findB = true;
      } else if (findB && c === 'c') {
        findC = true;
      } else if (findC && c === 'd') {
        findD = true;
      } else if (findD && c === 'e') {
        return true
      } else {
        findA = false;
        findB = false;
        findC = false;
        findD = false;
      }
    }
    return false;
  }

  console.log(match('ababfde'))
}

{
  // 状态机逻辑
  function match(str) {
    let state = start
    for (let c of str) {
      state = state(c);
    }
    return state === end;
  }

  console.log(match('ababcde'))

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
    if (c === 'd') {
      return findD
    }
    return start(c)
  }

  function findD(c) {
    if (c === 'e') {
      return end
    }
    return start(c)
  }

}
