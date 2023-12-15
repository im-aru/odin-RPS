//odin-RPS Algorithm & Plan

//Create a function that assigns the computer with either rock, paper, or scissors
function getComputerChoice(){

  //Randomly generate a number
  let randomNumber = Math.random();
  console.log('The randomly generated number is ' + randomNumber);

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
      alert('invalid choice. please select rock, paper, or scissors.');
      return getPlayerChoice();
  }
}

//Create a function to play rock paper scissors
function playRockPaperScissors(playerChoice , computerChoice){
  //Get a new user choice
  playerChoice = getPlayerChoice();
  console.log('You have chosen ' + playerChoice);
  //Get a new computer choice
  computerChoice = getComputerChoice();
  console.log('The computer has chosen ' + computerChoice);
  //Compare answers to see who won
  switch (true) {
    //If both answers are the same, re-run the program until one side wins.
    case (playerChoice === computerChoice):
      alert('The result is a tie! Please try again.');
      return playRockPaperScissors();
    case (playerChoice === 'rock' && computerChoice === 'scissor'): return 'You win! Rock beats scissors.';
    case (playerChoice === 'rock' && computerChoice === 'paper'): return 'You lost. Paper beats rock.';
  }
}

playRockPaperScissors();



//Create a variable to store the user's choice
let playerChoice;

//Create a variable to store the computer's choice
let computerChoice;


