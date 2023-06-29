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
const playerScoreText = document.querySelector('.player-score')
const computerScoreText = document.querySelector('.computer-score')
const Narration = document.querySelector('.narration')

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
    playerScoreText.textContent = `Your Score:  ${playerScore}`
    computerScoreText.textContent = `Computer Score: ${computerScore}`
}

function updateNarration(){
    if (playerSelection === 'Rock'){
        if (computerSelection === 'Scissors'){
            Narration.textContent = "With a mighty heave, you unleash the power of the solid rock, crushing your opponent's feeble scissors. Your unwavering strength triumphs over their futile attempts at defense. Victory is yours!"
        }
        else if (computerSelection === 'Paper'){
            Narration.textContent = "As you brandish your rock, ready to strike, the computer surprises you with a cunning maneuver. Their paper wraps around your sturdy stone, rendering it useless. Alas, your valiant effort falls short."
        }
        else if (computerSelection === 'Rock'){
            Narration.textContent = "The clash of rocks reverberates through the arena as both you and the computer display unwavering determination. In this epic battle, neither emerges victorious. It is a draw, and the struggle continues."
        }
    }
    else if (playerSelection === 'Paper'){
        if (computerSelection === 'Scissors'){
            Narration.textContent = "Your delicate paper is no match for the sharp blades of the computer's scissors. Despite your graceful maneuver, you find yourself falling victim to their precise cut. The battle ends in defeat."
        }
        else if (computerSelection === 'Paper'){
            Narration.textContent = "In a display of mirrored choices, both you and the computer wield the power of paper. The match ends in a stalemate, leaving the outcome hanging in uncertainty. Prepare for the next round!"
        }
        else if (computerSelection === 'Rock'){
            Narration.textContent = "With a flourish, you unfold your paper, revealing its dominance over the feeble rock chosen by the computer. Your strategic move catches them off guard, securing a glorious victory in your favor."
        }
    }
    else if (playerSelection === 'Scissors'){
        if (computerSelection === 'Scissors'){
            Narration.textContent = "The clash of metal-on-metal fills the air as both you and the computer exhibit the art of scissor-wielding. No winner emerges from this intense exchange, and the battle remains unresolved."
        }
        else if (computerSelection === 'Paper'){
            Narration.textContent = "With a swift snip, your scissors glide through the computer's defenseless paper, leaving them in shreds. Your precision and skill prove superior, and you claim a well-deserved triumph."
        }
        else if (computerSelection === 'Rock'){
            Narration.textContent = "Despite your nimble scissor-handling, the computer's rock stands unyielding against your assault. Your efforts to break through their solid defense prove futile, and defeat befalls you."
        }
    }
}

let round = 0;
function playRound(){

    getComputerChoice()
    
    if (playerSelection === computerSelection){
        Result.textContent = `You chose ${playerSelection}, and the computer chose ${playerSelection}. It's a tie!`
        computerScore++
        playerScore++
    } 
    else if (playerSelection === 'Rock' && computerSelection === 'Paper' ){
        Result.textContent = 'You chose rock, and the computer chose paper. Paper covers rock. Computer wins!'
        computerScore++
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors' ){
        Result.textContent = 'You chose rock, and the computer chose scissors. Rock crushes scissors. You win!'
        playerScore++
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors' ){
        Result.textContent = 'You chose paper, and the computer chose scissors. Scissors cut paper. Computer wins!'
        computerScore++
    }
    else if (playerSelection === 'Paper' && computerSelection === 'Rock' ){
        Result.textContent = 'You chose paper, and the computer chose rock. Paper covers rock. You win!'
        playerScore++
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock' ){
        Result.textContent = 'You chose scissors, and the computer chose rock. Rock crushes scissors. Computer wins!'
        computerScore++
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper' ){
        Result.textContent = 'You chose scissors, and the computer chose paper. Scissors cut paper. You win!'
        computerScore++
    }

    displayScore()
    
    round++
    
    if(round === 5){
        if (computerScore < playerScore){
            if (playerSelection === 'Rock'){
                Result.textContent = "Roaring with triumph, you raise your rock high in the air as the final blow lands. The power of your chosen weapon overwhelms the opposition, cementing your victory as the true champion of Rock, Paper, Scissors!"
            }
            else if (playerSelection === 'Paper'){
                Result.textContent = "Like an artist's brushstroke, your paper gracefully envelops the opponent's feeble defense. With strategic brilliance, you outmaneuver and outwit, claiming the victor's laurels for yourself. A triumph well-earned!"
            } 
            else if (playerSelection === 'Scissors'){
                Result.textContent = "The gleam of your razor-sharp scissors strikes fear into the heart of your opponent. With calculated precision, you snip away their hopes and dreams, emerging as the undefeated master of Rock, Paper, Scissors!"
            }
        }
        else if (computerScore > playerScore){
            if (computerSelection === 'Rock'){
                Result.textContent = "The computer's mighty rock smashes down upon your feeble defenses, leaving you in awe of its sheer strength. Alas, victory eludes your grasp this time, as the machine emerges as the conqueror of this futuristic battle."
            }
            else if (computerSelection === 'Paper'){
                Result.textContent = "The computer's relentless onslaught of paper overwhelms your strategic maneuverings. Their algorithms have predicted your every move, and their dominance remains unchallenged. Today, the machine reigns supreme."
            }
            else if (computerSelection === 'Scissors'){
                Result.textContent = "In a swift and calculated strike, the computer's scissors pierce through your defenses, leaving you defenseless and defeated. Its digital prowess proves unmatched, marking it as the undeniable victor of this medieval-futuristic showdown."
            }
        }
        else {
            Result.textContent = 'That was intense! It ended in a tie'
            if (playerSelection === 'Rock'){
                Result.textContent = "In a battle echoing with the strength of ages, both combatants brandish solid rocks, unyielding and steadfast. The clash of titans reverberates through the realm, but destiny plays a curious hand, declaring an eternal tie. "
            }
            else if (playerSelection === 'Paper'){
                Result.textContent = "Ancient parchment and futuristic scrolls unfurl in unison, bearing symbols of knowledge and secrets untold. The ethereal air crackles with anticipation, as both adversaries reveal the mysteries of paper. Yet, the cosmic tapestry weaves a tale of balance, intertwining their destinies in an eternal tie."
            }
            else if (playerSelection === 'Scissors'){
                Result.textContent = "Like twin serpents poised for a dance, the razor-sharp blades of both adversaries slice through the air in perfect synchrony. A symphony of metal rings out, their scissor-wielding prowess on display. Yet, the cosmic scales tip towards equilibrium, declaring an eternal tie."
            }
        }
    }
    updateNarration()

}

Buttons.forEach(button => {
    button.addEventListener('click', getClickedButton)
})
