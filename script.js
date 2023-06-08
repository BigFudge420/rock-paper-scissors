//  ------------ALGORITHM------------

// create new function getComputerChoice that picks an option from rock, paper and scissors on random.
// use prompt to get the player's choice 
// create function that makes the player's choice case insensitve
// make a function that plays one round and declares winners, with parameters that have the values equal to both the players and computers choice of weapon
// make a function that plays a game, with 5 rounds
// create a score system

//  ------------ALGORITHM------------

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
    alert(`Your Score:  ${playerScore}     Computer's Score: ${computerScore}`)
}

function playRound(){

    getComputerChoice()
    if (playerSelection === computerSelection){
        console.log(`That was a tie! You both chose ${playerSelection}`)
        computerScore++
        playerScore++
    } 
    else if (playerSelection === 'Rock' && computerSelection === 'Paper' ){
        console.log('Haha!! You lose! Paper beats Rock')
        computerScore++
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors' ){
        console.log('Wow! You win that round, Rock beats Scissors')
        playerScore++
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors' ){
        console.log('Haha!! You lose! Scissors beats Paper')
        computerScore++
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock' ){
        console.log('Wow! You win that round, Paper beats Rock')
        playerScore++
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock' ){
        console.log('Haha!! You lose! Rock beats Scissors')
        computerScore++
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors' ){
        console.log('Wow! You win that round, Scissors beats Paper')
        playerScore++
    }
}

Buttons.forEach(button => {
    button.addEventListener('click', getClickedButton)
})

// function game(){
//     for (i = 1; i <= 5; i++){
//         playRound()
//     }

//     if (playerScore > computerScore){
//         alert("Congratulations!! You won the game")
//     }
//     else if (playerScore < computerScore){
//         alert("Game Over! You lose")
//     }
//     else {
//         alert("That was intense! It ended in a tie")
//     }

//     alert(`Final Score: \nYour Score:  ${playerScore}     Computer's Score: ${computerScore}`)
// }

// game()
