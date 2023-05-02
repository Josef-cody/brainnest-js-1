const option = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let randomIndex = Math.floor(Math.random() * 3);
    return option[randomIndex];
}


function humanPlay() {
    let value = "";
    let playersChoice = prompt("Jigsaw : I want to play a game. \n Rock, Paper, Scissors! \n What's your choice?", "rock");

    let PlayerSelection = playersChoice.toLowerCase();
    return PlayerSelection
}
let playerCount = 0;
let computerCount = 0;
function playRound(PlayerSelection, computerSelection) {
   
    switch (PlayerSelection) {
        case 'rock': {
            if (computerSelection == 'paper') {
                computerCount = computerCount + 1;
                return "You Lose! Paper beats Rock"
            } else if (computerSelection == 'scissors') {
                playerCount = playerCount + 1;
                return "You Win! Rock beats Scissors"
            } else if (computerSelection == 'rock') {
                return "Draw"
            }
            break;
        }
        case 'paper': {
            if (computerSelection == 'rock') {
                playerCount = playerCount + 1;
                return "You Win! Paper beats Rock"
            } else if (computerSelection == 'scissors') {
                computerCount = computerCount + 1;
                return "You Lose! Scissors beats Paper"
            } else if (computerSelection == 'paper') {
                return "Draw"
            }
            break;
        }
        case 'scissors': {
            if (computerSelection == 'rock') {
                computerCount = computerCount + 1;
                return "You Lose! Rock beats Scissors"
            } else if (computerSelection == 'paper') {
                playerCount = playerCount + 1;
                return "You Win! Scissors beats Paper"
            } else if (computerSelection == 'scissors') {
                return "Draw"
            }
            break;
        }
        default:
            return 'Restart the game'
    }
}


 

function game(){
    for (let i = 0; i < 5; i++) {
         if (!option.includes(humanPlay())) {
             alert('You have to choose between Rock, Paper, Scissors!')
       break;
    }else {
        playRound(humanPlay(),computerPlay());}
    }
     if (playerCount < computerCount) {
         console.log(`Your score is ${playerCount}, computer's score is ${computerCount}! Computer Win`)
     } else if (playerCount == computerCount) {console.log(`Your score is ${playerCount}, computer's score is ${computerCount}! It is a draw`)}
     else { console.log(`Your score is ${playerCount}, computer's score is ${computerCount}! You Win`) }
}
