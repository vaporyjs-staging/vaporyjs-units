var assert = require('assert')
var Units = require('../')

describe('convert', function () {
  it('should work for big unit to small unit', function () {
    assert.equal(Units.convert('1', 'eth', 'wei'), '1000000000000000000')
    assert.equal(Units.convert('20', 'gwei', 'wei'), '20000000000')
  })
  it('should work for small unit to big unit', function () {
    assert.equal(Units.convert('1', 'wei', 'eth'), '0.000000000000000001')
    assert.equal(Units.convert('1', 'finney', 'eth'), '0.001')
    assert.equal(Units.convert('20', 'gwei', 'eth'), '0.00000002')
  })
})

describe('lazyConvert', function () {
  it('should work for big unit to small unit', function () {
    assert.equal(Units.lazyConvert('1 eth', 'wei'), '1000000000000000000 wei')
    assert.equal(Units.lazyConvert('20 gwei', 'wei'), '20000000000 wei')
  })
  it('should work for small unit to big unit', function () {
    assert.equal(Units.lazyConvert('1 wei', 'eth'), '0.000000000000000001 eth')
    assert.equal(Units.lazyConvert('1 finney', 'eth'), '0.001 eth')
    assert.equal(Units.lazyConvert('20 gwei', 'eth'), '0.00000002 eth')
  })
})

describe('units export', function () {
  it('should be available', function () {
    assert.equal(typeof Units.units, 'object')
  })
  it('should contain strings', function () {
    assert.equal(typeof Units.units['wei'], 'string')
  })
})
