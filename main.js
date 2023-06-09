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
let round = 0;
let playerBtn;
let computerBtn;
let otherBtn;
let arrayBtn;

console.log(computerScore)
console.log(playerScore)

const Buttons = document.querySelectorAll('.btn')
const Result = document.querySelector('.result')
const playerScoreText = document.querySelector('.player-score')
const computerScoreText = document.querySelector('.computer-score')
const Narration = document.querySelector('.narration')
const restartBtn = document.getElementById('#restart')


function restartNow(){
    playerScore = 0
    computerScore = 0
    displayScore()
    Result.textContent = 'Choose your weapon wisely and may fortune favor the bold!'
    Narration.textContent = "Welcome, brave warrior, to the realm of Rock, Paper, Scissors! Prepare to engage in a battle of wits and strategy, where ancient traditions clash with the technology of tomorrow..."
    round = 0;
    playerBtn = document.getElementById(playerSelection)
    computerBtn = document.getElementById(computerSelection)
    playerBtn.style.backgroundColor = '#FFFFFF'
    computerBtn.style.backgroundColor = '#FFFFFF'
}

function decideOtherBtn(){
    if (arrayBtn.includes('Rock') && arrayBtn.includes('Paper')){
        otherBtn = document.getElementById('Scissors')
    }
    else if (arrayBtn.includes('Rock') && arrayBtn.includes('Scissors')){
        otherBtn = document.getElementById('Paper')
    }
    else if (arrayBtn.includes('Paper') && arrayBtn.includes('Scissors')){
        otherBtn = document.getElementById('Rock')
    }
    else if (playerSelection === 'Paper'&& computerSelection === 'Paper'){
        let other1  = document.getElementById('Scissors')
        let other2 = document.getElementById('Rock')
        otherBtn = [other1, other2]
    }
    else if (playerSelection === 'Rock'&& computerSelection === 'Rock'){
        let other1  = document.getElementById('Scissors')
        let other2 = document.getElementById('Paper')
        otherBtn = [other1, other2]
    }
    else if (playerSelection === 'Scissors'&& computerSelection === 'Scissors'){
        let other1  = document.getElementById('Paper')
        let other2 = document.getElementById('Rock')
        otherBtn = [other1, other2]
    }
}

function changeBtnBg(){
    playerBtn = document.getElementById(playerSelection)
    computerBtn = document.getElementById(computerSelection)
    decideOtherBtn()
    playerBtn.style.backgroundColor = "#FF7F5B"
    computerBtn.style.backgroundColor = "#6A7EFC"
    if (Array.isArray(otherBtn)){
        otherBtn.forEach((other) => {
            other.style.backgroundColor = '#FFFFFF'
        })
    }
    else {
        otherBtn.style.backgroundColor = '#FFFFFF'
    }
    if (playerSelection === computerSelection){
        playerBtn.style.backgroundColor = "#59CE8F"
        computerBtn.style.backgroundColor = "#59CE8F"
    }
}

function getClickedButton(e){
    let clickedButton = e.target.id;
    round++
    
    
    if (clickedButton === 'Rock'){
        playerSelection = 'Rock'
    }
    else if (clickedButton === 'Paper'){
        playerSelection = 'Paper'
    }
    else if (clickedButton === 'Scissors'){
        playerSelection = 'Scissors'
    }

    console.log(computerScore)
    console.log(playerScore)
    console.log(round)

    if (round <= 5){
        playRound()
    }


    showAndClosePopUp()

}

function showAndClosePopUp() {
    const openPopupButtons = document.querySelectorAll('[data-popup-target]');
    const closePopupButtons = document.querySelectorAll('[data-popup-close]');
    const popupMessage = document.querySelector('.popup-body')
    const popupTitle = document.querySelector('.title')
    const overlay = document.getElementById('overlay');
  
    if (computerScore < playerScore && round > 5){
        popupTitle.textContent = "Victory Achieved!"
        popupMessage.textContent = "Victory shines upon you! Your strategic prowess has prevailed against the mighty computer opponent. Click the restart button to embark on another exhilarating Rock, Paper, Scissors adventure and reaffirm your dominance!"
    }
    else if (computerScore > playerScore && round > 5){
        popupTitle.textContent = "Defeat Endured!"
        popupMessage.textContent = "Alas! The computer has emerged triumphant in this epic battle of wits. Fear not, noble challenger, for the realm of Rock, Paper, Scissors offers another chance at redemption. Click the restart button to hone your skills and claim victory in the next encounter!"
    }
    else if (computerScore === playerScore && round > 5){
        popupTitle.textContent = "Equillibrium Unleashed"
        popupMessage.textContent = "A magnificent stalemate! The forces of equilibrium have deemed this match a tie, leaving both contenders in awe of each other's skill. Click the restart button to delve into another captivating round, where destiny may unfold in your favor or test your mettle once again!"
    }

    openPopupButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.popupTarget);
        if (round > 5){
            openPopup(popup);
        }
      });
    });
  
    closePopupButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const popup = button.closest('.popup');
        closePopup(popup);
      });
    });
  }
  

function openPopup(popup){
    if (popup == null){
        return
    }
    popup.classList.add('active')
    overlay.classList.add('active')
}

function closePopup(popup){
    if (popup == null){
        return
    }

    popup.classList.remove('active')
    overlay.classList.remove('active')
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

function playRound(){
    
    getComputerChoice()
    arrayBtn = [`${playerSelection}`, `${computerSelection}`]
    changeBtnBg()
    
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
        playerScore++
    }

    displayScore()
    updateNarration()
    
    
    
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
            Result.textContent = "At the zenith of the climactic duel, a breathtaking tableau unfolds. The ethereal realm bears witness to a symphony of motion, as the clash reaches its crescendo, only to unveil an astonishing twist: a harmonious tie. Time stands still, freezing this spellbinding moment in an eternal masterpiece, where warriors' intertwined destinies paint a vivid tapestry of skill and resilience."
        }
        Narration.textContent = ''
        const restartBtn = document.createElement('button')
        restartBtn.classList.add('btn')
        restartBtn.setAttribute('id', 'restart')
        restartBtn.textContent = 'Begin anew!'
        document.body.appendChild(restartBtn);
        restartBtn.addEventListener('click', () => {
            restartNow()
            document.body.removeChild(restartBtn)
        })
    }

}

Buttons.forEach(button => {
    button.addEventListener('click', getClickedButton)
})
