// Initial Variables
var gameStarted = false;

var wordBank = ["mezzanine", "proscenium", "director", "actor", "dramaturg", "ensemble", "crew", 
    "blocking", "tech", "aside", "backdrop", "flyrail", "masking", "scrim"];

// Computer selected word
var currentWord = "";

// breaks computer selected word into individual letters
var lettersInCurrentWord = [];

// Holds the mix of blanks and accurate letters guessed in computer selected word
var currentLettersAndBlanks = [];

// Number of dashes/blanks in current word
var dashes = 0;

// Holds all the wrongly guessed letters
var wrongGuessesArray = [];

// Holds every letter guessed
var lettersGuessed = "";
    
// Max guesses and win/loss counters
var maxGuess = 10;
var wins = 0;
var losses = 0;


function beginGame() {
        
    document.getElementById("game-info").textContent = "What word am I thinking of?";

    maxGuess = 10;
        
    currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    lettersInCurrentWord = currentWord.split("");
        
    dashes = lettersInCurrentWord.length;
        
    console.log(currentWord);

    currentLettersAndBlanks = [];

    wrongGuessesArray = [];

    for ( var i = 0; i < dashes; i++) {
        currentLettersAndBlanks.push("_");
    }

    console.log(currentLettersAndBlanks);
    
    document.getElementById("remaining-guesses").innerHTML = maxGuess;

    document.getElementById("word-to-guess").innerHTML = currentLettersAndBlanks.join(" ");
        
    document.getElementById("letters-guessed").innerHTML = wrongGuessesArray.join(" ");

}


function checkLetters(letter) {
    
    var letterInWord = false;

    for (var i = 0; i < dashes; i++) {

        if (currentWord[i] === letter) {
                
            letterInWord = true;
        }
    }

    if (letterInWord) {

        for (var j = 0; j < dashes; j++) {

            if (currentWord[j] === letter) {

                currentLettersAndBlanks[j] = letter;
            } 
        }

        console.log(currentLettersAndBlanks);
    }    
    
    else {

        wrongGuessesArray.push(letter);

        maxGuess--;
    }
}  


function roundComplete() {

    document.getElementById("remaining-guesses").innerHTML = maxGuess;

    document.getElementById("word-to-guess").innerHTML = currentLettersAndBlanks.join(" ");

    document.getElementById("letters-guessed").innerHTML = wrongGuessesArray.join(" ");

    if (lettersInCurrentWord.toString() === currentLettersAndBlanks.toString()) {

        wins++;

        document.getElementById("total-wins").innerHTML = wins;

        beginGame();

    } else if (maxGuess === 0) {
        
        losses++;

        document.getElementById("total-losses").innerHTML = losses;

        beginGame();
    }
}

document.onkeyup = function(event) {

    if (!gameStarted) {
        
        beginGame();

        gameStarted = true;

    } else if (gameStarted) {

        lettersGuessed = String.fromCharCode(event.which).toLowerCase();

        checkLetters(lettersGuessed);

        roundComplete();

    }
};