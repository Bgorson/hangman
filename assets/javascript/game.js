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
var positionMatch= [];
var userGuess;

//Variables used for writing text to document
var solutionText=document.getElementById("solution");

var winText = document.getElementById("wintext");
var userGuessText = document.getElementById("userguesstext");
var guessesLeftText= document.getElementById("guessesleft");
var words = ["winston","mario", "overwatch", "nintendo", "tracer", "donkeykong", "luigi", "kirby", "starcraft", "zergling"];
var chancesText= document.getElementById("currentWord");
var imageSolution= document.getElementById("wordImage");

function randWord() {
    var pickedWord = words[Math.floor(Math.random() * words.length)];
    return pickedWord
};
//Game start function. Picks new letter, clears guesses, restores chances
function newGame() {
    chosenWord = randWord();
    guessesArray = [];
    guessesLeft = 10;
    chosenLetter ='';
    updatingSpace= makingSpace('_', chosenWord.length);
    chancesText.textContent = updatingSpace;
    console.log(chosenWord);
        }
//Creates the spaces of hangman    
function makingSpace(string, times) {
    var theSpaces = [];
    while (times > 0) {
        theSpaces.push(string);
        times --;
    }
    return theSpaces;
    
}
newGame()
chancesText.textContent = makingSpace(' _ ', chosenWord.length)
var updatingSpace= makingSpace('_', chosenWord.length);
// chancesText.textContent = updatingSpace;




//Activates on key press
document.onkeyup = function(event) {
    userGuess = event.key; //key press is stored to userguess
    if (letters.includes(userGuess)) {
        
    
    if (guessesArray.includes(userGuess)){
        console.log("repeat or bad input")
    } 
    else if ((chosenWord.indexOf(userGuess)) === -1) {
        guessesLeft--;
        guessesArray.push(userGuess);
        if (guessesLeft === 0) {
            console.log("Lost")
            var audio = new Audio("assets/audio/lose.mp3");
            audio.play();
            newGame();
        }
    }
        for (i =0; i < chosenWord.length;i++) {
            if (userGuess === chosenWord.charAt(i)) {
                positionMatch.push(i);
                console.log("first if statement " + positionMatch);
            } 
    
            }
        for (i=0;  i < positionMatch.length;i++) {
                var wordIndex= positionMatch[i];
            updatingSpace.splice(wordIndex,1,userGuess);
                console.log(updatingSpace)
                
                wordArray.push(userGuess);  
                    }
                positionMatch= [];
    if (updatingSpace.indexOf('_') == -1) {
                wins++;
                imageSolution.innerHTML = "<img src='assets/images/" + chosenWord + ".png'>";
                var audio = new Audio("assets/audio/" + chosenWord+ ".mp3");
                audio.play();
                console.log("won")
                newGame();
            }
        
    //Display scoreboard
        winText.textContent = "wins: " + wins;
        userGuessText.textContent = "You've already chosen: " + guessesArray;
        guessesLeftText.textContent= "You've got " + guessesLeft +" chances left!";
        chancesText.textContent = "What you've solved:  " + updatingSpace;

        }
    }