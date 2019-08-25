import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./utils/getWeb3";
import { Button } from '@aragon/ui'
import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);

      const votingAppABI = [{"constant":true,"inputs":[],"name":"hasInitialized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_script","type":"bytes"}],"name":"getEVMScriptExecutor","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getRecoveryVault","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MODIFY_QUORUM_ROLE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_voteId","type":"uint256"},{"name":"_voter","type":"address"}],"name":"getVoterState","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_voteId","type":"uint256"}],"name":"getVote","outputs":[{"name":"open","type":"bool"},{"name":"executed","type":"bool"},{"name":"startDate","type":"uint64"},{"name":"snapshotBlock","type":"uint64"},{"name":"supportRequired","type":"uint64"},{"name":"minAcceptQuorum","type":"uint64"},{"name":"yea","type":"uint256"},{"name":"nay","type":"uint256"},{"name":"votingPower","type":"uint256"},{"name":"script","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_minAcceptQuorumPct","type":"uint64"}],"name":"changeMinAcceptQuorumPct","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MODIFY_SUPPORT_ROLE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_supportRequiredPct","type":"uint64"}],"name":"changeSupportRequiredPct","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"}],"name":"allowRecoverability","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"appId","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getInitializationBlock","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"}],"name":"transferToVault","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_sender","type":"address"},{"name":"_role","type":"bytes32"},{"name":"_params","type":"uint256[]"}],"name":"canPerform","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getEVMScriptRegistry","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"voteTime","outputs":[{"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"CREATE_VOTES_ROLE","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_sender","type":"address"},{"name":"","type":"bytes"}],"name":"canForward","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_voteId","type":"uint256"}],"name":"canExecute","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_voteId","type":"uint256"},{"name":"_voter","type":"address"}],"name":"canVote","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"kernel","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_executionScript","type":"bytes"},{"name":"_metadata","type":"string"}],"name":"newVote","outputs":[{"name":"voteId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_evmScript","type":"bytes"}],"name":"forward","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"minAcceptQuorumPct","outputs":[{"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isPetrified","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"votesLength","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_voteId","type":"uint256"},{"name":"_supports","type":"bool"},{"name":"_executesIfDecided","type":"bool"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_token","type":"address"},{"name":"_supportRequiredPct","type":"uint64"},{"name":"_minAcceptQuorumPct","type":"uint64"},{"name":"_voteTime","type":"uint64"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_executionScript","type":"bytes"},{"name":"_metadata","type":"string"},{"name":"_castVote","type":"bool"},{"name":"_executesIfDecided","type":"bool"}],"name":"newVote","outputs":[{"name":"voteId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_voteId","type":"uint256"}],"name":"executeVote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"supportRequiredPct","outputs":[{"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PCT_BASE","outputs":[{"name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isForwarder","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"voteId","type":"uint256"},{"indexed":true,"name":"creator","type":"address"},{"indexed":false,"name":"metadata","type":"string"}],"name":"StartVote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"voteId","type":"uint256"},{"indexed":true,"name":"voter","type":"address"},{"indexed":false,"name":"supports","type":"bool"},{"indexed":false,"name":"stake","type":"uint256"}],"name":"CastVote","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"voteId","type":"uint256"}],"name":"ExecuteVote","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"supportRequiredPct","type":"uint64"}],"name":"ChangeSupportRequired","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"minAcceptQuorumPct","type":"uint64"}],"name":"ChangeMinQuorum","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"executor","type":"address"},{"indexed":false,"name":"script","type":"bytes"},{"indexed":false,"name":"input","type":"bytes"},{"indexed":false,"name":"returnData","type":"bytes"}],"name":"ScriptResult","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"vault","type":"address"},{"indexed":true,"name":"token","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"RecoverToVault","type":"event"}]
      // get smart contract
      const VotingAppContract = new web3.eth.Contract(votingAppABI, '0x40923e3215243b4a51bf411f9873d02f5bacfd60');
      
      let voteYes = document.getElementById('voteYes');
      let voteNo = document.getElementById('voteNo');
      let voteId = '16';

      console.log('Voting App', VotingAppContract);
      
      const vote = (bool) => {
          // need to get the VoteId somehow
          // function vote(uint256 _voteId, bool _supports, bool _executesIfDecided) external voteExists(_voteId) 
          VotingAppContract.methods.vote(voteId, bool, true).send({from: accounts[0]}, (error, transactionHash) => {
              console.log('There was an error?', error);
              console.log('tx hash from smart contract', transactionHash);
          });
      }

      voteYes.addEventListener('click', async (e) => {
          vote(true);
      })

      voteNo.addEventListener('click', async (e) => {
          vote(false);
      })

    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div>
        <h1>Make your vote</h1>
        <Button mode="outline" id="voteNo">
          <img className="logo" src="aragonlogo.svg"/>
          No</Button>
        <Button mode="strong" id="voteYes">
          <img className="logo" src="aragonlogo.svg"/>
          Yes</Button>
      </div>
    );
  }
}

export default App;
