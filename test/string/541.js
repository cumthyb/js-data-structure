const should = require('should')
const reverseStr = require('../../code/string/541.反转字符串2.js')



describe('reverseStr test', function () {
  
  it('reverseStr:s = "abcdefg", k = 2', () => {
    reverseStr("abcdefg",2).should.equal("bacdfeg")
  })
  it('reverseStr:s = "abcdefg", k = 4', () => {
    reverseStr("abcdefg",4).should.equal("dcbaefg")
  })
  it('reverseStr:s = "abcd", k = 2', () => {
    reverseStr("abcd",2).should.equal("bacd")
  })
  "hyzqyljrnigxvdtneasepfahmtyhlohwxmkqcdfehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqlimjkfnqcqnajmebeddqsgl"
39
  it('reverseStr:s = "hyzqyljrnigxvdtneasepfahmtyhlohwxmkqcdfehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqlimjkfnqcqnajmebeddqsgl", k = 39', () => {
    reverseStr("hyzqyljrnigxvdtneasepfahmtyhlohwxmkqcdfehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqlimjkfnqcqnajmebeddqsgl",39).should.equal("fdcqkmxwholhytmhafpesaentdvxginrjlyqzyhehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqllgsqddebemjanqcqnfkjmi")
  })
})