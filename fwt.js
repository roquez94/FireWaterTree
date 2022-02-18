//Console Game of Fire-Water-Tree
//Variation of Rock,paper, scissors

// Play against computer, randomly returns fire, water, tree
let fire = "fire";
let water = "water";
let tree = "tree";
let computerSelection;
let playerSelection = "fire";
let playerScore = 0;
let computerScore = 0;

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
console.log("Computer selects:", computerSelection);

// Single round of game , player vs computer

function playRound(playerSelection, computerSelection) {
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

//declare winner of round
  console.log(playRound(playerSelection, computerSelection));

//for loop to play 5 rounds of game

function game(){
    for (let i = 0; i <= 5; i++){
        playRound(playerSelection, computerSelection);
    if (i = 5){
        if (computerScore < playerScore){
            return "You Lose the game";
        } else {
            return "You Won the game";
        }
    }
    }
}
 
console.log(game());
