const should = require('should')
const reverseWords = require('../../code/string/557.反转字符串中的单词3.js')



describe('revertByWorld test', function () {
  
  it('revertByWorld:Let\'s take LeetCode contest', () => {
    reverseWords("Let's take LeetCode contest").should.equal("s'teL ekat edoCteeL tsetnoc")
  })

})