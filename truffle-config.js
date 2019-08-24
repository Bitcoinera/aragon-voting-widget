const homedir = require('homedir')
const path = require('path')

const HDWalletProvider = require('truffle-hdwallet-provider')
const HDWalletProviderPrivkey = require('truffle-hdwallet-provider-privkey')

const mnemonic = 'coffee fashion spin tobacco shaft over culture swamp congress undo embark arch'
// const DEFAULT_MNEMONIC = 'explain tackle mirror kit van hammer degree position ginger unfair soup bonus'

const provider = new HDWalletProvider(mnemonic,
  "https://rinkeby.infura.io/v3/f51e48f60970447b92fe62c09ac2da04");
const web3 = new Web3(provider);
web3.setProvider(provider);

deploy = async ()=>{
   const accounts = await web3.eth.getAccounts();
   console.log(accounts[0]);
}
deploy();

// const configFilePath = (filename) =>
//   path.join(homedir(), `.aragon/${filename}`)

// const mnemonic = () => {
//   try {
//     return require(configFilePath('mnemonic.json')).mnemonic
//   } catch (e) {
//     return DEFAULT_MNEMONIC
//   }
// }

const settingsForNetwork = (network) => {
  try {
    return require(configFilePath(`${network}_key.json`))
  } catch (e) {
    return { }
  }
}

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
