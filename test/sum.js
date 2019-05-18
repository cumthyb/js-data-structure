const should = require('should')
const sum = require('../code/sum.js')


describe('sum test', function () {
  
  it('1加上2等于3', function () {
    sum(1, 2)
      .should.equal(3)
  })

  it('字符串"42329"加上字符串"21532"等于"63861"', function () {
    sum('42329', '21532')
      .should.equal(63861)
  })

  it('"1"加上"w"等于"请输入数字"', function () {
    sum('1', 'w')
      .should.equal('请输入数字')
  })

})