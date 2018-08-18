    // Initial Variables
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

    var wordBank = ["rock", "paper", "scissors"];

    var number = Math.floor(Math.random() * wordBank.length);

    var currentWord = wordBank[number];
        console.log(currentWord);

    var maxGuess = 10;

    var wins = 0;

    var losses = 0;

    
    document.onkeyup = function(event) {
        var userGuess = event.key;

        if (userGuess === letters) {

            

        }

    };

    // function resetGame () {

    // //for-loop to iterate through the letters array
    // for (var i = 0; i < letters.length; i++) {

    //     currentWord.push("_");

    // };