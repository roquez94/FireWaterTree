//Console Game of Fire-Water-Tree -- Variation of Rock,paper, scissors

// Play against computer, randomly returns fire, water, tree
let fire = "fire";
let water = "water";
let tree = "tree";
let computerSelection;
let playerSelection;
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
    computerPlay(); 
    document.getElementById("compPick").textContent = `Computer selects: ${computerSelection}`;

    if (playerSelection == fire && computerSelection == water){
        computerScore += 1;
        document.getElementById("display").textContent = "You Lose! Water washes Fire";
    } else if (playerSelection == water && computerSelection == tree) {
        computerScore += 1;
        document.getElementById("display").textContent = "You Lose! Trees absorbs Water";
    } else if (playerSelection == tree && computerSelection == fire){
        computerScore += 1;
        document.getElementById("display").textContent = "You Lose! Fire burns Trees ";
    } else if (playerSelection == computerSelection){
        computerScore += 1;
        playerScore +=1;
        document.getElementById("display").textContent ="It's a draw";
    } else {
        playerScore +=1;
        document.getElementById("display").textContent ="You win this round!";
    }
    document.getElementById('runningScore').textContent =`${playerScore} vs ${computerScore}`;
  }
//play round when button is pressed

document.getElementById('fire').addEventListener("click",()=> {game(fire, computerSelection)}); 
document.getElementById('water').addEventListener("click",()=> {game(water, computerSelection)}); 
document.getElementById('tree').addEventListener("click",()=> {game(tree, computerSelection)}); 

document.getElementById('runningScore').textContent =`${playerScore} vs ${computerScore}`;

//for loop to play 5 rounds of game

function game(playerSelection, computerSelection){
    for (let i = 0; i < 5; i++){
        computerPlay;
        playRound(playerSelection, computerSelection);
     //   console.log(playRound(playerSelection, computerSelection));
     if (i = 4){
        if (computerScore > playerScore){
            document.getElementById('winner').textContent = "Computer is Winning!";
        } else if (computerScore == playerScore) {
            document.getElementById('winner').textContent =  "The Game is at a Draw";
        } else {
            document.getElementById('winner').textContent =  "Your Winning!";
        }
     } else {
        document.getElementById('winner').textContent =  "Keep Playing"; 
     }
    }
 }

 //console.log(game());