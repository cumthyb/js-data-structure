const should = require('should')
const reverseWords = require('../../code/string/344.反转字符串.js')



describe('reverseString test', function () {
  
  it('reverseString:["h","e","l","l","o"]', () => {
    reverseWords(["h","e","l","l","o"]).should.deepEqual(["o","l","l","e","h"])
  })

})