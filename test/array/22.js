const should = require('should')
const generateParenthesis = require('../../code/array/22.括号生成.js')

describe('generateParenthesis test', function () {
  
  it("generateParenthesis:''", () => {
    generateParenthesis('').should.deepEqual([])
  })
  it("generateParenthesis:'23'", () => {
    generateParenthesis('23').should.deepEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
  })
  it("generateParenthesis:'792'", () => {
    generateParenthesis('792').should.deepEqual(["pwa","pwb","pwc","pxa","pxb","pxc","pya","pyb","pyc","pza","pzb","pzc","qwa","qwb","qwc","qxa","qxb","qxc","qya","qyb","qyc","qza","qzb","qzc","rwa","rwb","rwc","rxa","rxb","rxc","rya","ryb","ryc","rza","rzb","rzc","swa","swb","swc","sxa","sxb","sxc","sya","syb","syc","sza","szb","szc"])
  })
})