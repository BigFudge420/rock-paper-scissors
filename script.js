// create new function getComputerChoice that picks an option from rock, paper and scissors on random.
// use prompt to get the player's choice 
// make a function that plays one round and declares winners, with parameters that have the values equal to both the players and computers choice of weapon
// make a funtion that plays a game, with 5 rounds

let computerSelection

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber){
        case 0:
            return computerSelection = 'rock'
            break;
        case 1:
            return computerSelection = 'scissors'
            break;
        case 2:
            return computerSelection = 'paper'
            break;
    }
}
