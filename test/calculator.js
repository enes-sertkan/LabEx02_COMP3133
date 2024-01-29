const Calculator = require('../app/calculator');
const assert = require('assert')


describe('Validating Calculator Functionality', () => {

    //Add - success
    it('should return 7 when value is 5 + 2', () => {
        assert.equal(Calculator.add(5, 2), 7)
    })
    //Add - fail
    it('should return 7 when value is 5 + 2', () => {
        assert.equal(Calculator.add(5, 2), 8)
    })

    //Sub - success
    it('should return 3 when value is 5 - 2', () => {
        assert.equal(Calculator.sub(5, 2), 3)
    })
    //Sub- fail
    it('should return 3 when value is 5 - 2', () => {
        assert.equal(Calculator.sub(5, 2), 5)
    })

    //mul - success
    it('should return 3 when value is 5 * 2', () => {
        assert.equal(Calculator.mul(5, 2), 10)
    })
    //mul- fail
    it('should return 3 when value is 5 * 2', () => {
        assert.equal(Calculator.mul(5, 2), 5)
    })

    //div - success
    it('should return 3 when value is 10 / 2', () => {
        assert.equal(Calculator.div(10, 2), 5)
    })
    //div- fail
    it('should return 3 when value is 10 / 2', () => {
        assert.equal(Calculator.div(10, 2), 7)
    })
})