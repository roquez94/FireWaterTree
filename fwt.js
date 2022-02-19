//Console Game of Fire-Water-Tree
//Variation of Rock,paper, scissors

// Play against computer, randomly returns fire, water, tree
let fire = "fire";
let water = "water";
let tree = "tree";
let computerSelection;
// let playerSelection = prompt("Enter Fire, Water, or Tree: ").toLocaleLowerCase();
let playerScore = 0;
let computerScore = 0;

//Consider buttons for selections fire, water, tree
//Design with image logos for choices. Bcground image

function computerPlay() {
   let compChoice = Math.floor(Math.random()*3);

   if (compChoice === 0){
       computerSelection = fire;
   } else if (compChoice === 1){
       computerSelection = water;
   } else {
       computerSelection = tree;
   }
return computerSelection;
}

computerPlay();

// Single round of game , player vs computer
//declare winner of round

function playRound(playerSelection, computerSelection) {
    
    console.log("Computer selects:", computerSelection);

    if (playerSelection == fire && computerSelection == water){
        computerScore += 1;
        return "You Lose! Water washes Fire";
    } else if (playerSelection == water && computerSelection == tree) {
        computerScore += 1;
        return "You Lose! Trees absorbs Water";
    } else if (playerSelection == tree && computerSelection == fire){
        computerScore += 1;
        return "You Lose! Fire burns Trees ";
    } else if (playerSelection == computerSelection){
        computerScore += 1;
        playerScore +=1;
        return "It's a draw";
    } else {
        playerScore +=1;
        return "You win this round!";
    }
  }

//for loop to play 5 rounds of game

function game(){

    for (let i = 0; i < 5; i++){
        computerPlay;
     let playerSelection = prompt("Enter Fire, Water, or Tree: ").toLocaleLowerCase();

        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
    if (i = 4){
        if (computerScore > playerScore){
            return "Computer Wins, You Lose!";
        } else if (computerScore = playerScore) {
            return "The Game is a Draw";
        } else {
            return "You Won! Computer Loses!";
        }
    }
}
 
console.log(game());