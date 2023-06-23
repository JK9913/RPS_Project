function getComputuerChoice(){
    const randomNumber = Math.floor(Math.random() * (3 - 1 +1)) + 1;

    switch (randomNumber) {
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissors';
            break;
    }
}

function playRound(playerSelection) {
    console.log(playerSelection);
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputuerChoice();
    computerSelection = computerSelection.toLowerCase();
    
    // Select the elements that needs to change text
    const winnerText = document.querySelector('.winner_text');
    const results = document.querySelector('.result_text');
    const scorePlayer = document.querySelector('.result_player');
    const scoreComputer = document.querySelector('.result_computer');


    //initiate variables
    let decideRound = ""
    if (playerSelection.toLowerCase() === 'rock') {
        switch (computerSelection.toLowerCase()) {
            case 'rock':
                decideRound = 'Both chose ' + playerSelection + ', it\'s a tie';
                winnerText.textContent = decideRound 
                break; 
            case 'scissors':
                decideRound = 'Computer chose ' + computerSelection + ', Player wins!';
                winnerText.textContent = decideRound
                scorePlayer.textContent = (parseInt(scorePlayer.textContent) + 1).toString()
                break;
            case 'paper':
                decideRound = 'Computer chose ' + computerSelection + ', Computer wins!';
                winnerText.textContent = decideRound
                scoreComputer.textContent = (parseInt(scoreComputer.textContent) + 1).toString()
                break;
            default:
                decideRound = 'Could not recognize computer choice...'
        }
    }else if (playerSelection.toLowerCase() === 'paper'){
        switch (computerSelection.toLowerCase()) {
            case 'paper':
                decideRound = 'Both chose ' + playerSelection + ', it\'s a tie';
                break; 
            case 'rock':
                decideRound = 'Computer chose ' + computerSelection + ', Player wins!';
                winnerText.textContent = decideRound 
                scorePlayer.textContent = (parseInt(scorePlayer.textContent) + 1).toString()
                break;
            case 'scissors':
                decideRound = 'Computer chose ' + computerSelection + ', Computer wins!';
                winnerText.textContent = decideRound
                scoreComputer.textContent = (parseInt(scoreComputer.textContent) + 1).toString()
                break;
            default:
                decideRound = 'Could not recognize computer choice...'
        }
    }else if  (playerSelection.toLowerCase() === 'scissors'){
        switch (computerSelection.toLowerCase()) {
            case 'scissors':
                decideRound = 'Both chose ' + playerSelection + ', it\'s a tie';
                break; 
            case 'paper':
                decideRound = 'Computer chose ' + computerSelection + ', Player wins!';
                winnerText.textContent = decideRound
                scorePlayer.textContent = (parseInt(scorePlayer.textContent) + 1).toString()
                break;
            case 'rock':
                decideRound = 'Computer chose ' + computerSelection + ', Computer wins!';
                winnerText.textContent = decideRound 
                scoreComputer.textContent = (parseInt(scoreComputer.textContent) + 1).toString()
                break;
            default:
                decideRound = 'Could not recognize computer choice...'
        }
    }else {
        decideRound = 'Couldn\'t recognize user input, please try again.'
    }
}

function playerSelection() {
    let playerSelect = prompt('Please enter rock, paper, or scissor...');
        while (!(arrayChoices.includes(playerSelect))) {
            playerSelect = prompt('Invalid entry \n Please enter rock, paper, or scissor...');
        };
    console.log(playerSelect);
    return playerSelect;
}


function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;



}



const buttons  = document.querySelectorAll('button');

// For each method to iterate through and add eventListener
buttons.forEach(btn => {
    btn.addEventListener('click', () => playRound(btn.textContent))
})
