    // Initial Variables
    var gameStarted = false;

    var wordBank = ["mezzanine", "proscenium", "director", "actor", "dramaturg", "ensemble", "crew", 
    "blocking", "tech", "aside", "backdrop", "flyrail", "masking", "scrim"];

    var maxGuess = 10;

    var guessArray = [];
    var wrongGuessesArray = [];

    var dashes = 0;

    var currentWord = "";

    var wordInProgress = "";

    var wins = 0;
    var losses = 0;
    
    document.onkeyup = function(event) {
        if (gameStarted) {
            console.log("Game is already underway");
            
            guessArray = event.key;
            console.log(guessArray);


        } else {
            beginGame ();
        }

    }

    function beginGame () {
        document.getElementById("game-info").textContent = "Game has started";
        gameStarted = true;

        currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        dashes = currentWord.length;

        wordInProgress = currentWord.split(" ");
        
        for ( var i = 0; i < wordInProgress.length; i++) {
            currentWord[i] = "_";
        }

        dashes = currentWord.join(" ");
        document.getElementById("word-to-guess").innerHTML = dashes;
        document.getElementById("game-info").textContent = currentWord.join(" ");

    }


    document.onkeyup = function(event) {

        
        document.getElementById("letters-guessed").innerHTML = userGuessArray;

};
