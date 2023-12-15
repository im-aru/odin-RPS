function getComputerChoice() {
  let randomNumber = Math.random();
  switch (true) {
    case (randomNumber < .34): return 'rock';
    case (randomNumber < .67): return 'paper';
    case (randomNumber < 1): return 'scissors';
  }
}
function getPlayerChoice() {
  const userChoice = prompt('do you choose rock, paper, or scissors?');
  switch (userChoice?.toLowerCase()) {
    case ('rock'): return 'rock';
    case ('paper'): return 'paper';
    case ('scissors'): return 'scissors';
    default:
      console.log('invalid choice. please select rock, paper, or scissors.');
      return getPlayerChoice();
  }
}

function playRockPaperScissors() {
  const playerChoice = getPlayerChoice();
  console.log('You have chosen ' + playerChoice);
  const computerChoice = getComputerChoice();
  console.log('The computer has chosen ' + computerChoice);
  switch (true) {
    case (playerChoice === computerChoice):
      console.log('The result is a tie! Please try again.');
      return playRockPaperScissors();
    case (playerChoice === 'rock' && computerChoice === 'scissors'):
    case (playerChoice === 'paper' && computerChoice === 'rock'):
    case (playerChoice === 'scissors' && computerChoice === 'paper'): 
      return ('you won! ' + playerChoice + ' beats ' + computerChoice);
    case (playerChoice === 'rock' && computerChoice === 'paper'):
    case (playerChoice === 'paper' && computerChoice === 'scissors'):
    case (playerChoice === 'scissors' && computerChoice === 'rock'): 
      return ('you lost. ' + computerChoice + ' beats ' + playerChoice);
    default: console.log('something went wrong. Please reload the page and try again.');
  }
}

function game() {
  let playerWins = 0;
  let computerWins = 0;
  for (let roundNumber = 0; roundNumber < 5; roundNumber++) {
    const gameResult = playRockPaperScissors();
    console.log(gameResult);
    if (gameResult.includes('you won!')) playerWins++;
    if (gameResult.includes('you lost.')) computerWins++;
    console.log(`You have ` + playerWins + ` wins. The computer has ` + computerWins + ' wins.');
    if (playerWins === 3) {
      console.log('You\'ve won the best of 5! Congratulations.')
      roundNumber = 5
    } else if (computerWins === 3) {
      console.log('You\'ve lost the best of 5. Good luck next time!')
      roundNumber = 5
    }
  }
}

game();