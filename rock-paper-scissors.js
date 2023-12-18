let playerWins = 0;
let computerWins = 0;

function playRound(playerChoice) {
  const computerOptions = ["rock", "paper", "scissors"];
  const computerChoice = computerOptions[Math.floor(Math.random() * 3)];
  switch (true) {
    case playerChoice === "rock" && computerChoice === "scissors":
    case playerChoice === "paper" && computerChoice === "rock":
    case playerChoice === "scissors" && computerChoice === "paper":
      playerWins++;
      return `you won! ${playerChoice} beats ${computerChoice}`;
    case playerChoice === "rock" && computerChoice === "paper":
    case playerChoice === "paper" && computerChoice === "scissors":
    case playerChoice === "scissors" && computerChoice === "rock":
      computerWins++;
      return `you lost. ${computerChoice} beats ${playerChoice}`;
    case playerChoice === computerChoice:
      return "the result is a tie! Please try again.";
    default:
      return "something went wrong. Please reload the page and try again.";
  }
}

function buttonPress(button) {
  resultsText.textContent = playRound(button);
  winnerText.textContent = firstToFive();
  scoresText.textContent =
    `Your score: ${playerWins} Computer score: ${computerWins}`;
}

function firstToFive() {
  let winner;
  playerWins === 5 && (winner = "you");
  computerWins === 5 && (winner = "the computer");
  if (!winner) return;
  removePlayButtons();
  return `${winner} won 5 rounds first!`;
}

function removePlayButtons() {
  rockBtn.remove();
  paperBtn.remove();
  scissorsBtn.remove();
}

// UI
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const resultsText = document.querySelector(".results");
const scoresText = document.querySelector(".score");
const winnerText = document.querySelector(".winner");

rockBtn.addEventListener("click", () => buttonPress("rock"));
paperBtn.addEventListener("click", () => buttonPress("paper"));
scissorsBtn.addEventListener("click", () => buttonPress("scissors"));
