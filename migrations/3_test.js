const TestDAppChain = artifacts.require('./Test.sol')

module.exports = (deployer, network, accounts) => {

  deployer.deploy(TestDAppChain).then(async () => {
    const TestDAppChainInstance = await TestDAppChain.deployed()
    console.log(`Test deployed at address: ${TestDAppChainInstance.address}`)
  })
}
