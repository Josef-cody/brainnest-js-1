const option = ['rock', 'paper', 'scissors'];
let playerCount = 0;
let computerCount = 0;

let computerPlay = () => {
    let randomIndex = Math.floor(Math.random() * 3);
    return option[randomIndex];
}

function playRound(PlayerSelection, computerSelection) {
   
    switch (PlayerSelection) {
        case 'rock': {
            if (computerSelection == 'paper') {
                playerCount;
                computerCount = computerCount + 1;
                 alert("You Lose! Paper beats Rock")
            } else if (computerSelection == 'scissors') {
                computerCount;
                playerCount = playerCount + 1;
                 alert("You Win! Rock beats Scissors")
            } else if (computerSelection == 'rock') {
                playerCount; computerCount;
                 alert("Draw")
            }
            break;
        }
        case 'paper': {
            if (computerSelection == 'rock') {
                computerCount;
                playerCount = playerCount + 1;
                 alert("You Win! Paper beats Rock")
            } else if (computerSelection == 'scissors') {
                playerCount;
                computerCount = computerCount + 1;
                 alert("You Lose! Scissors beats Paper")
            } else if (computerSelection == 'paper') {
                playerCount; computerCount;
                 alert("Draw")
            }
            break;
        }
        case 'scissors': {
            if (computerSelection == 'rock') {
                playerCount;
                computerCount = computerCount + 1;
                 alert("You Lose! Rock beats Scissors")
            } else if (computerSelection == 'paper') {
                computerCount;
                playerCount = playerCount + 1;
                 alert("You Win! Scissors beats Paper")
            } else if (computerSelection == 'scissors') {
                playerCount; computerCount;
                 alert("Draw")
            }
            break;
        }
        default: alert("Something goes wrong!")
    }
}

function game(){
    for (let i = 0; i < 5; i++) {
            let playersChoice = prompt("Jigsaw : I want to play a game. \n Rock, Paper, Scissors! \n What's your choice?", "rock");
            let PlayerSelection = playersChoice.toLowerCase();
            if (!option.includes(PlayerSelection)) {
                alert('You have to choose between Rock, Paper, Scissors!')
                alert('Restart the game!')
                playerCount = 0;
                computerCount = 0;
                clear();
                break;
            }
        else {
        playRound(PlayerSelection, computerPlay())
        }
    };
    if (playerCount < computerCount) {
        console.log(`Your score is ${playerCount}, computer's score is ${computerCount}! Computer Win!!!`)
    } else if (playerCount == computerCount) {
        console.log(`Your score is ${playerCount}, computer's score is ${computerCount}! It is a draw!`)
    }
    else { 
        console.log(`Your score is ${playerCount}, computer's score is ${computerCount}! You Win!!!`)
    }
    playerCount = 0;
    computerCount = 0;
}

