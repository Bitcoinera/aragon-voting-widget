let form = document.getElementById('form');
let voteYes = document.getElementById('voteYes');
let voteNo = document.getElementById('voteNo');
let voteId = '14';

// ideal library model 
// window.myLibrary = function(ABI, address, target) {
    
// }

window.addEventListener('load', () => {

    if(window.web3) {

        // get smart contract
        const VotingAppContract = new web3.eth.Contract(window.votingAppABI, '0x40923e3215243b4a51bf411f9873d02f5bacfd60');

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
    }
})