    // Initial Variables
    var gameStarted = false;
    var gameOver = false;

    var wordBank = ["mezzanine", "proscenium", "director", "actor", "dramaturg", "ensemble", "crew", 
    "blocking", "tech", "aside", "backdrop", "flyrail", "masking", "scrim"];

    var currentWord = "";
    var lettersInCurrentWord = [];
    var currentLettersAndBlanks = [];

    var dashes = 0;

    var wrongGuessesArray = [];
    var lettersGuessed = "";
    
    var maxGuess = 10;
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

        maxGuess = 10;
        
        currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];

        lettersInCurrentWord = currentWord.split(" ");
        
        dashes = currentWord.length;
        
        console.log(currentWord);

        currentLettersAndBlanks = [];

        wrongGuessesArray = [];

        for ( var i = 0; i < currentWord.length; i++) {
            lettersInCurrentWord[i] = "_";
        }

        document.getElementById("game-info").textContent = "What word am I thinking of?";
        gameStarted = true;
        
        dashes = lettersInCurrentWord.join(" ");
        document.getElementById("word-to-guess").innerHTML = dashes;
        document.getElementById("word-to-guess").innerHTML = lettersInCurrentWord.join(" ");
        
        guessArray.push(event.key);
        document.getElementById("letters-guessed").innerHTML = guessArray.join(" ");

    }

    function checkLetters(letter) {
        var letterinWord = false;

        for (var i = 0; i < dashes; i++) {
            if (wordbank[i] === letter) {
                letterInWord = true;
            }
        }

        if (letterinWord) {

            for (var j = 0; j < dashes; j++) {
                if (wordBank[j] === letter) {
                currentLettersAndBlanks[j] = letter;
                }
            }
        }

    }


beginGame();

document.onkeyup = function(event) {
    lettersGuessed = String.fromCharCode(event.which).toLocaleLowerCase();

    checkLetters(lettersGuessed);

    roundComplete();
};