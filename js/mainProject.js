
const option = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let randomIndex = Math.floor(Math.random() * 3);
    return option[randomIndex];
}


function humanPlay() {
    let value = "";
    let playersChoice = prompt("Jigsaw : I want to play a game. \n Rock, Paper, Scissors! \n What's your choice?", "rock");

    let PlayerSelection = playersChoice?.toLowerCase();
    if (PlayerSelection == 'rock') {
        value = PlayerSelection;
        return value;
    } else {
        window.alert('You have to choose between Rock, Paper or Scissors');
    }
}

function playRound(PlayerSelection, computerSelection) {
    switch (PlayerSelection) {
        case 'rock': {
            if (computerSelection == 'paper') {
                return "You Lose! Paper beats Rock"
            } else if (computerSelection == 'scissors') {
                return "You Win! Rock beats Scissors"
            } else if (computerSelection == 'rock') {
                return "Draw"
            }
            break;
        }
        case 'paper': {
            if (computerSelection == 'rock') {
                return "You Win! Paper beats Rock"
            } else if (computerSelection == 'scissors') {
                return "You Lose! Scissors beats Paper"
            } else if (computerSelection == 'paper') {
                return "Draw"
            }
            break;
        }
        case 'scissors': {
            if (computerSelection == 'rock') {
                return "You Lose! Rock beats Scissors"
            } else if (computerSelection == 'paper') {
                return "You Win! Scissors beats Paper"
            } else if (computerSelection == 'scissors') {
                return "Draw"
            }
            break;
        }
        default:
            return 'Make your choice'
    }
}


// playRound(humanPlay(),computerPlay())

function game(){
    
}











