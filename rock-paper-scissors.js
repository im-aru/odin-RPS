function getComputerChoice() {
  let randomNumber = Math.random();
  switch (true) {
    case randomNumber < 0.34:
      return "rock";
    case randomNumber < 0.67:
      return "paper";
    case randomNumber < 1:
      return "scissors";
  }
}

let playerWins = 0;
let computerWins = 0;

function playRound(playerChoice) {
  // const playerChoice = getPlayerChoice();
  console.log("You have chosen " + playerChoice);
  const computerChoice = getComputerChoice();
  console.log("The computer has chosen " + computerChoice);
  switch (true) {
    case playerChoice === computerChoice:
      return "The result is a tie! Please try again.";
    case playerChoice === "rock" && computerChoice === "scissors":
    case playerChoice === "paper" && computerChoice === "rock":
    case playerChoice === "scissors" && computerChoice === "paper":
      playerWins++;
      return "you won! " + playerChoice + " beats " + computerChoice;
    case playerChoice === "rock" && computerChoice === "paper":
    case playerChoice === "paper" && computerChoice === "scissors":
    case playerChoice === "scissors" && computerChoice === "rock":
      computerWins++;
      return "you lost. " + computerChoice + " beats " + playerChoice;
    default:
      return "something went wrong. Please reload the page and try again.";
  }
}
function buttonPress(button){
  resultsText.textContent = playRound(button);
  scoresText.textContent =
    "Your score: " + playerWins + " Computer score: " + computerWins;

  switch (true) {
    case computerWins === 5:
      winnerText.textContent =
        "The computer beat you to 5. Good luck next time!";
      break;
    case playerWins === 5:
      winnerText.textContent = "First to 5 wins! Congratulations!";
      break;
  }
}
function game() {
  let playerWins = 0;
  let computerWins = 0;
  // for (let roundNumber = 0; roundNumber < 5; roundNumber++) {
  const gameResult = playRound();
  console.log(gameResult);
  if (gameResult.includes("you won!")) playerWins++;
  if (gameResult.includes("you lost.")) computerWins++;
  console.log(
    `You have ` +
      playerWins +
      ` wins. The computer has ` +
      computerWins +
      " wins."
  );
  // if (playerWins === 3) {
  //   console.log("You've won the best of 5! Congratulations.");
  //   roundNumber = 5;
  // } else if (computerWins === 3) {
  //   console.log("You've lost the best of 5. Good luck next time!");
  //   roundNumber = 5;
  // }
  // }
}

// UI
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const resultsText = document.querySelector(".results");
const scoresText = document.querySelector(".score");
const winnerText = document.querySelector(".winner");

// rockBtn.addEventListener("click", () => {
//   resultsText.textContent = playRound("rock");
//   scoresText.textContent =
//     "Your score: " + playerWins + " Computer score: " + computerWins;
// });

// paperBtn.addEventListener("click", () => {
//   resultsText.textContent = playRound("paper");
//   scoresText.textContent =
//     "Your score: " + playerWins + " Computer score: " + computerWins;
// });

// scissorsBtn.addEventListener("click", () => {
//   resultsText.textContent = playRound("scissors");
//   scoresText.textContent =
//     "Your score: " + playerWins + " Computer score: " + computerWins;

//   switch (true) {
//     case computerWins === 5:
//       winnerText.textContent =
//         "The computer beat you to 5. Good luck next time!";
//       break;
//     case playerWins === 5:
//       winnerText.textContent = "First to 5 wins! Congratulations!";
//       break;
//   }
// });

rockBtn.addEventListener("click", buttonPress('rock'));
paperBtn.addEventListener("click", buttonPress('paper'));
scissorsBtn.addEventListener("click", buttonPress('scissors'));