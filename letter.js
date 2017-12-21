// Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

var wordsArray = ["oregon", "homework", "javascript"];
var words = "";
var blanks = 0;
var chosenWords = [];
var underscores = [];

function game() {
    words = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    chosenWords = words.split("");
    blanks = chosenWords.length;

    underscores = [];
    for (var i = 0; i < blanks;) {
        underscores.push("_");
    }
    
};