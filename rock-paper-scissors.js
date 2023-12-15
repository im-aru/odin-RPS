//Create a function that assigns the computer with either rock, paper, or scissors
function getComputerChoice() {
  //Randomly generate a number
  let randomNumber = Math.random();

  //Assign the computer's decision of rock, paper, or scissors based on the generated number.
  switch (true) {
    case (randomNumber < .34): return 'rock';
    case (randomNumber < .67): return 'paper';
    case (randomNumber < 1): return 'scissors';
  }
}

//Create a function that prompts the user to select rock, paper, or scissors
function getPlayerChoice() {
  //Ask the user to select between rock, paper, or scissors. 
  const userChoice = prompt('do you choose rock, paper, or scissors?');

  //Format to fit within the program.
  switch (userChoice?.toLowerCase()) {
    case ('rock'): return 'rock';
    case ('paper'): return 'paper';
    case ('scissors'): return 'scissors';
    //Create a catch to make sure the user doesn't select something other than rock, paper, or scissors
    default:
      console.log('invalid choice. please select rock, paper, or scissors.');
      return getPlayerChoice();
  }
}

//Create a function to play rock paper scissors
function playRockPaperScissors() {
  //Get a new user choice
  const playerChoice = getPlayerChoice();
  console.log('You have chosen ' + playerChoice);
  //Get a new computer choice
  const computerChoice = getComputerChoice();
  console.log('The computer has chosen ' + computerChoice);

  switch (true) {
    //If both answers are the same, re-play the game until one side wins.
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

//Create a function that plays 5 rounds of rock paper scissors
function game() {
  // Add counters to keep track of player & computer wins
  let playerWins = 0;
  let computerWins = 0;
  // Play a best of 5
  for (let i = 0; i < 5; i++) {
    const gameResult = playRockPaperScissors();
    console.log(gameResult);
    // Add to the winner's counter
    if (gameResult.includes('you won!')) playerWins++;
    if (gameResult.includes('you lost.')) computerWins++;
    console.log(`You have ` + playerWins + ` wins. The computer has ` + computerWins + ' wins.');
    // End the game early if someone reaches three wins
    if (playerWins === 3) {
      console.log('You\'ve won the best of 5! Congratulations.')
      i = 5
    } else if (computerWins === 3) {
      console.log('You\'ve lost the best of 5. Good luck next time!')
      i = 5
    }
  }
}

game();