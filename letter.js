// Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

// var Letter = function (blanks, chosenWords, underscores, numberGuesses) {

var Letter = function () {
    this.blanks = [];
    this.chosenWords = [];
    // this.underscores = [];
    this.numberGuesses = 10;

    this.startGame = function () {
        // var wordsArray = ["oregon", "california", "texas", "alaska"];
        var wordsArray = ["oregon"]
        // var words = "";

        var words = wordsArray[Math.floor(Math.random() * wordsArray.length)];
        var chosenWords = words.split("");
        var blanks = [];
        // this.underscores = [];

        for (var i = 0; i < chosenWords.length; i++) {
            blanks.push("_");
        }
        this.blanks = blanks;
        this.chosenWords = chosenWords;

    };
};

module.exports = Letter;



