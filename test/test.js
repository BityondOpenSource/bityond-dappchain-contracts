const Test = artifacts.require('Test');

contract('Test', (accounts) => {
  let test

  beforeEach(async () => {
    test = await Test.new()
  })

  it('Should have an address for Test', async () => {
    assert(test.address)
  });

  it('Should read default test value', async() => {
	  const result = await test.get.call({from: accounts[1]})
	  assert.equal(result, 256)
  })

//   it('Should set a value', async () => {
//     const newValue = 1
//     const tx = await test.set(newValue, {from: accounts[0]})
//     assert.equal(tx.logs[0].args._value.toNumber(), newValue)

//     const result = await test.get.call({from: accounts[1]})
//     assert.equal(result[0], newValue)
//     assert.equal(result[1], accounts[1])
//   })
})
