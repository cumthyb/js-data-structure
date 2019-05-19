const should = require('should')
const letterCombinations = require('../../code/array/17.电话号码的字母组合.js')

describe('revertByWorld test', function () {
  
  it("revertByWorld:''", () => {
    letterCombinations('').should.deepEqual([])
  })
  it("revertByWorld:'23'", () => {
    letterCombinations('23').should.deepEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
  })
  it("revertByWorld:'792'", () => {
    letterCombinations('792').should.deepEqual(["pwa","pwb","pwc","pxa","pxb","pxc","pya","pyb","pyc","pza","pzb","pzc","qwa","qwb","qwc","qxa","qxb","qxc","qya","qyb","qyc","qza","qzb","qzc","rwa","rwb","rwc","rxa","rxb","rxc","rya","ryb","ryc","rza","rzb","rzc","swa","swb","swc","sxa","sxb","sxc","sya","syb","syc","sza","szb","szc"])
  })
})