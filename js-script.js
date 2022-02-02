
// Computer selection randomizer function

let options = ["rock", "paper", "scissors"];
        function computerPlay() {
            computerSelection = options[Math.floor(Math.random()*options.length)];
        }

// Function to alert winner

function gameScore() {
    if (playerScore == 5) {
        alert('You won the match!');
        window.location.reload();
    } else if (computerScore == 5) {
        alert('You lost the match!');
        window.location.reload();
    }
}

// Function to play a round

let roundResult;
        function playRound(playerSelection, computerSelection) {
            if (playerSelection == computerSelection) {
                return roundResult = "It's a draw";
            } else if (playerSelection == "rock" && computerSelection == "scissors") {
                return roundResult = "You won this round!";
            } else if (playerSelection == "paper" && computerSelection == "rock") {
                return roundResult = "You won this round!";
            } else if (playerSelection == "scissors" && computerSelection == "paper") {
                return roundResult = "You won this round!";
            } else if (playerSelection == "rock" && computerSelection == "paper") {
                return roundResult = "You lost this round!";
            } else if (playerSelection == "paper" && computerSelection == "scissors") {
                return roundResult = "You lost this round!";
            } else if (playerSelection == "scissors" && computerSelection == "rock") {
                return roundResult = "You lost this round!";
            } else {
                return roundResult = "You have to choose a valid option!";
            }
        }

// Variables that keep track of wins and losses

let playerScore = 0;
let computerScore = 0;

// Function of a game

function game() {
    computerPlay();
    playRound(playerSelection, computerSelection);
    if (playerSelection == computerSelection) {
        const computerChoice = document.getElementById('computerChoice');
        computerChoice.textContent = "It's a draw!"
    }
    if (roundResult == "You won this round!") {
        playerScore = ++playerScore;
        const computerChoice = document.getElementById('computerChoice');
        computerChoice.textContent = "The computer chose " + computerSelection + ", you won this round!";
        const pScore = document.getElementById('pScore');
        pScore.textContent = "Player Score: " + playerScore;
        gameScore();
    } else if (roundResult == "You lost this round!") {
        computerScore = ++computerScore;
        const computerChoice = document.getElementById('computerChoice');
        computerChoice.textContent = "The computer chose " + computerSelection + ", you lost this round!";
        const cScore = document.getElementById('cScore');
        cScore.textContent = "Computer Score: " + computerScore;
        gameScore();
    }       
}

// Variable assignment of buttons

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// Event listeners for buttons

rock.addEventListener('click', () => {
    playerSelection = 'rock';
    game();
});

paper.addEventListener('click', event => {
    playerSelection = 'paper';
    game();
})

scissors.addEventListener('click', event => {
    playerSelection = 'scissors';
    game();
})

console.log(playerScore);
console.log(computerScore)
