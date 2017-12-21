// Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

var wordsArray = ["oregon", "homework", "javascript"];
var word = "";
var blanks = 0;
var underscores = [];

function game() {
    word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    underscores = word.split("");
    
    blanks = underscores.length;
}