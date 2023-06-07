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

function capitalizeOnlyFirstLetter(playerInput = prompt('Choose your weapon!!')){
    let firstChar = playerInput.charAt(0)
    let restOfTheString =  playerInput.slice(1)
    let convertedLetter = firstChar.toUpperCase()
    let convertedSubstring = restOfTheString.toLowerCase()
    return playerSelection = convertedLetter + convertedSubstring
}

let computerScore = 0;
let playerScore = 0; 

function displayScore(){
    alert(`Your Score:  ${playerScore}     Computer's Score: ${computerScore}`)
}

function playRound(){

    let validOption = false;
    while (!validOption){
        capitalizeOnlyFirstLetter()
        getComputerChoice()

        if (playerSelection === computerSelection){
            alert(`That was a tie! You both chose ${playerSelection}`)
            computerScore++
            playerScore++
        } 
        else if (playerSelection === 'Rock' && computerSelection === 'Paper' ){
            alert('Haha!! You lose! Paper beats Rock')
            computerScore++
        }
        else if (playerSelection === 'Rock' && computerSelection === 'Scissors' ){
            alert('Wow! You win that round, Rock beats Scissors')
            playerScore++
        }
        else if (playerSelection === 'Paper' && computerSelection === 'Scissors' ){
            alert('Haha!! You lose! Scissors beats Paper')
            computerScore++
        }
        else if (playerSelection === 'Paper' && computerSelection === 'Rock' ){
            alert('Wow! You win that round, Paper beats Rock')
            playerScore++
        }
        else if (playerSelection === 'Scissors' && computerSelection === 'Rock' ){
            alert('Haha!! You lose! Rock beats Scissors')
            computerScore++
        }
        else if (playerSelection === 'Rock' && computerSelection === 'Scissors' ){
            alert('Wow! You win that round, Scissors beats Paper')
            playerScore++
        }
        else {
            alert('Please choose a valid weapon!!')
            continue;
        }
        
        validOption = true;
    }
    
    displayScore()

}

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
