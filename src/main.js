let form = document.getElementById('form');
let vote = document.getElementById('vote');
let button = document.getElementById('button');

window.addEventListener('load', () => {

    if(window.web3) {

        // get smart contract
        const VotingAppContract = new web3.eth.Contract(window.votingAppABI, '0x40923e3215243b4a51bf411f9873d02f5bacfd60');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            let support = vote.value;
            if (support === 'false') {support = false;} else {support = true;} 

            // need to get the VoteId somehow
            // function vote(uint256 _voteId, bool _supports, bool _executesIfDecided) external voteExists(_voteId) 
            VotingAppContract.methods.vote('9', support, true).send({from: accounts[0]}, (error, transactionHash) => {
                console.log('support is', support);
                console.log('There was an error?', error);
                console.log('tx hash from smart contract', transactionHash);
            });

        })
    }
})