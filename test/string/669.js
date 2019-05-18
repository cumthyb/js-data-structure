const should = require('should')
const countBinarySubstrings = require('../../code/string/696.计数二进制子串.js')



describe('countBinarySubstrings test', function () {
  
  it('countBinarySubstrings:00110011', () => {
    countBinarySubstrings("00110011").should.equal(6)
  })

})