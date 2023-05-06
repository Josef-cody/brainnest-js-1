const option = ['rock', 'paper', 'scissors'];
let playerCount = 0;
let computerCount = 0;
let i = 1;

let computerPlay = () => {
    let randomIndex = Math.floor(Math.random() * option.length);
    return option[randomIndex];
}
let humanPlay = () => {
    let playersChoice = prompt(`Round ${i} \n What's your choice? `, 'rock');

    while (playersChoice === null || playersChoice === "") {
        let confirm = prompt('Are you sure to quit? Please type \'Yes\' to continue or leave it empty / press cancel to quit the game');
        if (confirm === null || confirm == "") {
            return playersChoice
        } else if (confirm.trim().toLowerCase() === 'yes') {
            i--;
            return;
        }
    };
    if (playersChoice !== null || playersChoice !== "") {
        let playersChoiceLowerCase = playersChoice.trim().toLowerCase();
        while (!option.includes(playersChoiceLowerCase)) {
            playersChoiceLowerCase = prompt('You have to choose between rock, paper, scissors!').trim().toLowerCase();;
        }
        return playersChoiceLowerCase
    }


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
        default:
    }
}

const outcome = () => {
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
function game() {
    alert('Welcome! I wanna play a game, it is a classic, \n Rock, Paper, Scissors! \n It is a 5 round game! \n Press OK to start the game');
    for (i = 1; i < 6; i++) {
        const PlayerSelection = humanPlay();
        const computerSelection = computerPlay();
        if (PlayerSelection === null) { break }
        playRound(PlayerSelection, computerSelection)
    };
    outcome();
}

game()
