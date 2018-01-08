// Word: Used to create an object representing the current word the user is attempting to guess. This should contain word specific logic and data.

var letterJS = require("./letter.js");


// console.log(letterfc)

// var input = process.argv[2];

var checkWords = function () {

    this.checking = function (answer) {

        var letterfc = new letterJS();

        letterfc.startGame();

        // var letterCheck = false;
        var chosenWords = letterfc.chosenWords;
        var blanks = letterfc.blanks;
    
        // console.log(chosenWords)
    
        for (var j = 0; j < chosenWords.length; j++) {
            // console.log(chosenWords);
            if (chosenWords[j] === answer) {
                // letterCheck = true;
                blanks[j] = answer;
                console.log(blanks)
            }
        }

        this.chosenWords = chosenWords;
        this.blanks = blanks;
    }
}

module.exports = checkWords;


// console.log(input)

// function word(answer) {
//     var letterCheck = false;
//     var chosenWords = letterfc.chosenWords;
//     var blanks = letterfc.blanks;

//     console.log(chosenWords)

//     for (var j = 0; j < chosenWords.length; j++) {
//         // console.log(chosenWords);
//         if (chosenWords[j] === answer) {
//             // letterCheck = true;
//             blanks[j] = answer;
//             console.log(blanks)
//         }
//     }
// }

// word(input)
    // console.log(letterfc.blanks)

    // if (letterCheck === true) {
    //     for (var u = 0; u < letterfc.blanks; u++) {
    //         if (letterfc.chosenWords[u] === answer) {
    //             letterfc.blanks[u] = answer;
    //             console.log(letterfc.blanks);
    //         }
    //     }
    // }

    // else  {
    //     letterfc.numberGuesses--;
    //     console.log(letterfc.numberGuesses + "guesses remaining.");
    // }





// console.log(letterfc)
