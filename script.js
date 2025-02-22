function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice() {
    const humanChoice = prompt('Enter your choice: rock, paper, or scissors').toLowerCase();
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice;
    } else {
        alert('Invalid choice. Please enter rock, paper, or scissors.');
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || 
               (humanChoice === 'paper' && computerChoice === 'rock') ||
               (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function playGame() {
    // for (let i = 0; i < 5; i++) {
    //     const humanChoice = getHumanChoice();
    //     const computerChoice = getComputerChoice();
    //     console.log(playRound(humanChoice, computerChoice));
    // }
    // if (humanScore > computerScore) {
    //     console.log('You win the game!');
    // } else if (humanScore < computerScore) {
    //     console.log('You lose the game!');
    // } else {
    //     console.log('The game is a tie!');
    // }
}

playGame();