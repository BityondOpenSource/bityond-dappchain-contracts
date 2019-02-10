const { join } = require('path')
const LoomTruffleProvider = require('loom-truffle-provider')

module.exports = {
  contracts_build_directory: join(__dirname, './src/contracts'),
  compilers: {
    solc: {
      version: '0.4.24'
    }
  },
  networks: {
    bityond_dapp_chain: {
      provider: function() {
        const privateKey = 'cKlsH3kgapDm6c6Og9I2Q6dhIdgONWWVEO33YADrp+DATxUUdeRLPNzcQBta1SO9hkK4/0lniQnYoaKCqQly+w=='
        const chainId = 'default'
        const writeUrl = 'http://127.0.0.1:46658/rpc'
        const readUrl = 'http://127.0.0.1:46658/query'
        const loomTruffleProvider = new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKey)
        loomTruffleProvider.createExtraAccountsFromMnemonic("gravity top burden flip student usage spell purchase hundred improve check genre", 10)
        return loomTruffleProvider
      },
      network_id: '*'
    },
    extdev_plasma_us1: {
      provider: function() {
        const privateKey = 'kV4lLntH0y3uyz9J+kBt7YxeYd3M+mcrlt9RH6iWQu4/IDrAUSqwIaCZ6t5q8xJDvBmJwu0+LJB5lxLEYxcLGQ=='
        const chainId = 'extdev-plasma-us1'
        const writeUrl = 'http://extdev-plasma-us1.dappchains.com:80/rpc'
        const readUrl = 'http://extdev-plasma-us1.dappchains.com:80/query'
        return new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKey)
      },
      network_id: '9545242630824'
    },
  }
}
