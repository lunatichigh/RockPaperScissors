//computerAi will have three choices to play randomly between 1-3
let playerScore = 0;
let computerScore = 0;
let draws = 0;
let playerWinRound = "Player wins this round!"
let computerWinRound = "Computer wins this round!"
let draw = "Draw!"
let playerWin = "Player wins the game! Congratulations!"
let computerWin = "Computer wins the game! Congratulations!"
function computerPlay() {
    const randomNumber = (Math.floor(Math.random() * 3))

    if (randomNumber === 0){    //if the random number is equal to 0, return the string Rock
        return "rock";
    }
    if (randomNumber === 1){    //if the random number is equal to 1, return the string Paper
        return "paper";        //if not, continue on
    }
    if (randomNumber === 2)     //if the random number is equal to 2, return the string Scissors
        return "scissors";
    }       



//The Player and Computer play a round of Rock Paper Scissors to see who will win.

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection ){
            return draw;
        }
    else if ((playerSelection == "rock") && (computerSelection == "scissors")){
            return playerWinRound;
        }
    else if ((playerSelection == "paper") && (computerSelection == "rock")){
            return playerWinRound;
        }
    else if ((playerSelection == "scissors") && (computerSelection == "paper")){
            return playerWinRound;
        }
    else if ((playerSelection == "scissors") && (computerSelection == "rock")){
            return computerWinRound;
        }
    else if ((playerSelection == "rock") && (computerSelection == "paper")){
            return computerWinRound;
        }
    else if ((playerSelection == "paper") && (computerSelection == "scissors")){
            return computerWinRound;
        }
}

for (let i = 0; i < 1000; i++) {
    let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    const computerSelection = computerPlay();
    let roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);
    gameScore(roundResult);
    console.log("Your score is " + playerScore);
    console.log("The computer's score is " + computerScore);
  
    if (playerScore === 5 || computerScore === 5) {
      break;
    }
}
function gameScore(result) {
  
  if (result === playerWinRound) {
    playerScore++;
  } else if (result === draw) {
    draws++;
  } else {
    computerScore++;
  }


  if (playerScore === 5) {
    console.log(playerWin);
    return;
  }
  if (computerScore === 5) {
    console.log(computerWin);
    return;
  }
}
//Specifies round win/game win messages

