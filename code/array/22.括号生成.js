/*
给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

例如，给出 n = 3，生成结果为：

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  function generateParenthesisDFS(left, right, tmp, result) {
    if (left > right) {
      return
    }
    if (left === 0 && right === 0) {
      result.push(tmp)
      return
    }
    if (left > 0) {
       generateParenthesisDFS(left - 1, right, tmp + '(', result)
    }
    if (right > 0) {
       generateParenthesisDFS(left, right - 1, tmp + ')', result)
    }
  }
  let result=[]
  let tmp="("
  let left=n-1
  let right=n
  generateParenthesisDFS(left,right,tmp,result)
  return result
};

console.log(generateParenthesis(2));

module.exports = generateParenthesis
