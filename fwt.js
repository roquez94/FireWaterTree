//Console Game of Fire-Water-Tree
//Variation of Rock,paper, scissors

// Play against computer, randomly returns fire, water, tree
let fire = "fire";
let water = "water";
let tree = "tree";
let computerSelection;

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
console.log(computerSelection);

// Single round of game , player vs computer


//declare winner

//for loop to play 5 rounds of game
