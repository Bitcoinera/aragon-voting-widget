const path = require('path')
const HDWalletProvider = require('truffle-hdwallet-provider')

const mnemonic = 'coffee fashion spin tobacco shaft over culture swamp congress undo embark arch'

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    rinkeby: {
      network_id: 4,
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/f51e48f60970447b92fe62c09ac2da04");
      },
    }
  },

};
