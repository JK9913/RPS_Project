function getComputuerChoice(){
    let randomNumber = Math.floor(Math.random() * (3 - 1 +1)) + 1;

    switch (randomNumber) {
        case 1:
            return 'Rock';
            break;
        case 2:
            return 'Paper';
            break;
        case 3:
            return 'Scissor';
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if (playerSelection.toLowerCase() === 'rock') {
        switch (computerSelection.toLowerCase()) {
            case 'rock':
                return 'Both chose ' + playerSelection + ', it\'s a tie';
                break; 
            case 'scissor':
                return 'Computer chose ' + computerSelection + ', Player wins!';
                break;
            case 'paper':
                return 'Computer chose ' + computerSelection + ', Computer wins!';
                break;
            default:
                return 'Could not recognize computer choice...'
        }
    }else if (playerSelection.toLowerCase() === 'paper'){
        switch (computerSelection.toLowerCase()) {
            case 'paper':
                return 'Both chose ' + playerSelection + ', it\'s a tie';
                break; 
            case 'rock':
                return 'Computer chose ' + computerSelection + ', Player wins!';
                break;
            case 'scissor':
                return 'Computer chose ' + computerSelection + ', Computer wins!';
                break;
            default:
                return 'Could not recognize computer choice...'
        }
    }else if  (playerSelection.toLowerCase() === 'scissor'){
        switch (computerSelection.toLowerCase()) {
            case 'scissor':
                return 'Both chose ' + playerSelection + ', it\'s a tie';
                break; 
            case 'paper':
                return 'Computer chose ' + computerSelection + ', Player wins!';
                break;
            case 'rock':
                return 'Computer chose ' + computerSelection + ', Computer wins!';
                break;
            default:
                return 'Could not recognize computer choice...'
        }
    }else {
        return 'Couldn\'t recognize user input, please try again.'
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;

    for (let i = 1; i <= 5; i++) {
        const arrayChoices = ['rock','paper','scissor'];
        let playerSelect = prompt('Please enter rock, paper, or scissor...');
        while (!(arrayChoices.includes(playerSelect))) {
            playerSelect = prompt('Invalid entry \n Please enter rock, paper, or scissor...');
        }

        let computerSelect = getComputuerChoice();

        let result = playRound(playerSelect, computerSelect);
        result = result.toLowerCase();
        console.log(result);

        if (result.includes('player wins!')) {
            scorePlayer++; 
        }else if (result.includes('computer wins!')) {
            scoreComputer++
        }else {
            i--;
        }
    }

    if (scorePlayer > scoreComputer) {
        return ('Player: ' + scorePlayer + '\n Computer: ' + scoreComputer + '\n Player wins the game!' )
    }else {
        return ('Player: ' + scorePlayer + '\n Computer: ' + scoreComputer + '\n Computer wins the game!' )
    }

}

let winner = game();
alert(winner);

