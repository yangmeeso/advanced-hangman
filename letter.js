// Letter: Used for each letter in the current word. Each letter object should either display an underlying character, or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. This should contain letter specific logic and data.

var Letter = function (blanks, chosenWords, underscores, numberGuesses) {
    this.blanks = 0;
    this.chosenWords = [];
    this.underscores = [];
    this.numberGuesses = 10;

    this.startGame = function() {
        var wordsArray = ["oregon", "california", "texas", "alaska"];
        var words = "";

        words = wordsArray[Math.floor(Math.random() * wordsArray.length)];
        this.chosenWords = words.split("");
        this.blanks = chosenWords.length;
        this.underscores = [];

        for (var i = 0; i < blanks; i++) {
            underscores.push("_");
        }
    };
};

module.exports = Letter;



