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

const buttons = document.querySelectorAll('.choices button');
const playerScore = document.querySelector('.player-score span');
const computerScore = document.querySelector('.computer-score span');

buttons.forEach(button => { 
    button.addEventListener('click', () => { 
        const humanChoice = button.textContent.toLowerCase();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});

const titleScoreboard = document.querySelector('.title-scoreboard h2');

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        changeTitle('It\'s a tie!');
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || 
               (humanChoice === 'paper' && computerChoice === 'rock') ||
               (humanChoice === 'scissors' && computerChoice === 'paper')) {
        playerScore.textContent++;
        changeTitle(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
        computerScore.textContent++;
        changeTitle(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
    if (playerScore.textContent == 5 || computerScore.textContent == 5) {
        finishGame();
    }
}

function changeTitle(message) {
    if (message.includes('win')) {
        titleScoreboard.style.color = 'green';
    }
    if (message.includes('lose')) {
        titleScoreboard.style.color = 'red';
    }
    if (message.includes('tie')) {
        titleScoreboard.style.color = 'yellow';
    }
    titleScoreboard.textContent = message;
    setTimeout(() => {
        titleScoreboard.textContent = 'Scoreboard';
        titleScoreboard.style.color = '#fff';
    }, 3000);
}





