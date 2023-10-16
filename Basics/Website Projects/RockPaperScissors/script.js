const buttons = document.querySelectorAll(".buttons button");
const resultElement = document.getElementById("result");
const countElement = document.getElementById('main');

let userCount = 0;
let computerCount = 0;

function playRound(playerChoice) {
    if (userCount >= 5 || computerCount >= 5) {
        userCount = 0;
        computerCount = 0;
        resultElement.textContent = `Computer: ${computerCount} You: ${userCount}`;
    }



    const validChoices = ['rock', 'paper', 'scissors'];
    const computerChoice = validChoices[Math.floor(Math.random() * 3)];

    if (playerChoice === computerChoice) 
    {
        countElement.textContent = `It's a tie! you both chose ${playerChoice}.`;
    } 
    else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) 
    {
        userCount++;
        countElement.textContent = "You win!";
    } 
    else 
    {
        computerCount++;
        countElement.textContent = "Computer wins!";
    }
    

    resultElement.textContent = `Computer: ${computerCount} You: ${userCount}`;

    if(userCount == 5)
    {
        countElement.textContent = "You defeated the computer this round";
    }
    if(computerCount == 5)
    {
        countElement.textContent = "You got beat by a computer HOW!!!";
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.textContent.toLowerCase();
        playRound(playerChoice);
    });
});