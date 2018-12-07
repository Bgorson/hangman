//Basic Logic for HangMan

//Basic Logic 
//Randomly decide letter
//Track how many guesses I have left
//when correct answer is picked- ++win
//when guesses = 0 ++lose
//display keys pressed and do not allow repeats
//when win or lose ++ - clear guesses made and pick new letter

//Declare all variables being used
var wins=0;
var guessesLeft=10;
var guessesArray= [];
var chosenLetter;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wordArray= [];
var chosenWord = '';


//Variables used for writing text to document
var solutionText=document.getElementById("solution");

var winText = document.getElementById("wintext");
var userGuessText = document.getElementById("userguesstext");
var guessesLeftText= document.getElementById("guessesleft");
var words = ["mario"];
// var words = ["mario", "overwatch", "nintendo", "tracer", "donkeykong", "luigi", "kirby", "starcraft", "zerg"];
var chances;
var chancesText= document.getElementById("currentWord");

function randWord() {
    var pickedWord = words[Math.floor(Math.random() * words.length)];
    return pickedWord
};
//Game start function. Picks new letter, clears guesses, restores chances
function newGame() {
    randWord();
    chosenWord = randWord();
    guessesArray = [];
    guessesLeft = 10;
    chosenLetter;
    chances = chosenWord.length;
    
    }
//Creates the spaces of hangman    
function makingSpace(string, times) {
    var theSpaces = '';
    while (times > 0) {
        theSpaces = theSpaces + string;
        times --;
    }
    return theSpaces;
}
newGame()
chancesText.textContent = makingSpace(' _ ', chances)
var updatingSpace= makingSpace('_', chances);
chancesText.textContent = updatingSpace;
//All Functions

//Function to randomly select a word



//initates game


//Activates on key press
document.onkeyup = function(event) {
    var userGuess = event.key;
    var position = chosenWord.indexOf(userGuess);

    if (position > -1) {
    updatingSpace[position] = userGuess;      
    };
    if (updatingSpace.includes(userGuess) && updatingSpace[position+1] > 0) {
        updatingSpace[position+1] = userGuess;
    };
    if (position < -1) {
        guessesLeft--;
        guessesArray.push(userGuess);
            if (guessesLeft ==0) {
                newGame();
            }

    }

  //checks if the user pick is in the word

   

         //Display scoreboard
             winText.textContent = "wins: " + wins;
             userGuessText.textContent = "You've already chosen: " + guessesArray;
             guessesLeftText.textContent= "You've got " + guessesLeft +" chances left!";
             chancesText.textContent = "What you've solved" + updatingSpace;
            }
       
 