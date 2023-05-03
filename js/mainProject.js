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
                computerCount++;
                confirm("Computer selected Paper. You Lose! Paper beats Rock");
            } else if (computerSelection == 'scissors') {
                computerCount;
                playerCount++;
                confirm("Computer selected Scissors. You Win! Rock beats Scissors");
            } else if (computerSelection == 'rock') {
                playerCount; computerCount;
                confirm("Computer selected the same, it is a Draw");
            }
            break;
        }
        case 'paper': {
            if (computerSelection == 'rock') {
                computerCount;
                playerCount++;
                confirm("Computer selected Rock. You Win! Paper beats Rock");
            } else if (computerSelection == 'scissors') {
                playerCount;
                computerCount++;
                confirm("Computer selected Scissors. You Lose! Scissors beats Paper");
            } else if (computerSelection == 'paper') {
                playerCount; computerCount;
                confirm("Computer selected the same, it is a Draw");
            }
            break;
        }
        case 'scissors': {
            if (computerSelection == 'rock') {
                playerCount;
                computerCount++;
                confirm("Computer selected Rock. You Lose! Rock beats Scissors");
            } else if (computerSelection == 'paper') {
                computerCount;
                playerCount++;
                confirm("Computer selected Paper. You Win! Scissors beats Paper");
            } else if (computerSelection == 'scissors') {
                playerCount; computerCount;
                confirm("Computer selected the same, it is a Draw");
            }
            break;
        }
        default: alert("Something goes wrong!");
    }
}

function game() {
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
    } else if (playerCount !== 0 && playerCount === computerCount) {
        console.log(`Your score is ${playerCount}, computer's score is ${computerCount}! It is a draw!`)
    }
    else if (playerCount > computerCount) {
        console.log(`Your score is ${playerCount}, computer's score is ${computerCount}! You Win!!!`)
    }
    playerCount = 0;
    computerCount = 0;
}
