// Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.

var letterJS = require("./letter.js");



function word(answer) {
    var letterCheck = false;
    for (var j = 0; j < blanks; j++) {
        if (chosenWords[j] === answer) {
            letterCheck = true;
        }
    }

    if (letterCheck === true) {
        for (var u = 0; u < blanks; u++) {
            if (chosenWords[u] === answer) {
                underscores[u] = answer;
                console.log(blanks);
            }
        }
    }

    else  {
        numberGuesses--;
        console.log(numberGuesses + "guesses remaining.");
    }
}


