//  ------------ALGORITHM------------

// create new function getComputerChoice that picks an option from rock, paper and scissors on random.
// use prompt to get the player's choice 
// create function that makes the player's choice case insensitve
// make a function that plays one round and declares winners, with parameters that have the values equal to both the players and computers choice of weapon
// make a funtion that plays a game, with 5 rounds

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


