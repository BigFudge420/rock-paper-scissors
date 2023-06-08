let computerSelection

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber){
        case 0:
            return computerSelection = 'Rock'
            break;
        case 1:
            return computerSelection = 'Scissors'
            break;
        case 2:
            return computerSelection = 'Paper'
            break;
    }
}
 
let playerSelection
let playerScore = 0; 
let computerScore = 0;

const Buttons = document.querySelectorAll('.btn')
const Result = document.querySelector('.result')
const Score = document.querySelector('.score')
const Winner = document.querySelector('.winner')

function getClickedButton(e){
    let clickedButton = e.target.id;
    
    
    if (clickedButton === 'Rock'){
        playerSelection = 'Rock'
    }
    else if (clickedButton === 'Paper'){
        playerSelection = 'Paper'
    }
    else if (clickedButton === 'Scissors'){
        playerSelection = 'Scissors'
    }
    playRound()
}

function displayScore(){
    Score.textContent = `Your Score:  ${playerScore}     Computer's Score: ${computerScore}`
}

let round = 0;
function playRound(){

    getComputerChoice()
    if (playerSelection === computerSelection){
        Result.textContent = `That was a tie! You both chose ${playerSelection}`
        computerScore++
        playerScore++
    } 
    else if (playerSelection === 'Rock' && computerSelection === 'Paper' ){
        Result.textContent = 'Haha!! You lose! Paper beats Rock'
        computerScore++
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors' ){
        Result.textContent = 'Wow! You win that round, Rock beats Scissors'
        playerScore++
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors' ){
        Result.textContent = 'Haha!! You lose! Scissors beats Paper'
        computerScore++
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock' ){
        Result.textContent = 'Wow! You win that round, Paper beats Rock'
        playerScore++
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock' ){
        Result.textContent = 'Haha!! You lose! Rock beats Scissors'
        computerScore++
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper' ){
        Result.textContent = 'Wow! You win that round, Scissors beats Paper'
        computerScore++
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors' ){
        Result.textContent = 'Wow! You win that round, Scissors beats Paper'
        playerScore++
    }
    displayScore()
    round++
    if(round === 5){
        if (computerScore < playerScore){
            Winner.textContent = 'Congratulations!! You won the game'
        }
        else if (computerScore > playerScore){
            Winner.textContent = 'Game Over! You lose'
        }
        else {
            Winner.textContent = 'That was intense! It ended in a tie'
        }
    }
}

Buttons.forEach(button => {
    button.addEventListener('click', getClickedButton)
})
