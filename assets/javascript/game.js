    // Initial Variables
    var gameStarted = false;
    var gameOver = false;

    var wordBank = ["mezzanine", "proscenium", "director", "actor", "dramaturg", "ensemble", "crew", 
    "blocking", "tech", "aside", "backdrop", "flyrail", "masking", "scrim"];

    var maxGuess = 10;

    var guessArray = [];
    var wrongGuessesArray = [];

    var dashes = 0;

    var currentWord = "";
    var lettersInCurrentWord = "";

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
        document.getElementById("game-info").textContent = "What word am I thinking of?";
        gameStarted = true;

        currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];
        dashes = currentWord.length;

        lettersInCurrentWord = currentWord.split(" ");
        
        for ( var i = 0; i < currentWord.length; i++) {
            lettersInCurrentWord[i] = "_";
        }

        dashes = lettersInCurrentWord.join(" ");
        document.getElementById("word-to-guess").innerHTML = dashes;
        document.getElementById("word-to-guess").innerHTML = lettersInCurrentWord.join(" ");
        
        guessArray.push(event.key);
        document.getElementById("letters-guessed").innerHTML = guessArray.join(" ");


    };
