let form = document.getElementById('form');
let vote = document.getElementById('vote');
let button = document.getElementById('button');
let support = vote.value;

window.addEventListener('load', () => {

    if(window.web3) {

        // get smart contract
        const VotingAppContract = new web3.eth.Contract(window.votingAppABI, '0x40923e3215243b4a51bf411f9873d02f5bacfd60');

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // need to get the VoteId somehow
            VotingAppContract.methods.vote('5', true, true).send({from: accounts[0]}, (error, transactionHash) => {
                console.log('There was an error?', error);
                console.log('tx hash from smart contract', transactionHash);
            });

        })
    }
})