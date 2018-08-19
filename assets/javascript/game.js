    // Initial Variables
    var wordBank = ["rock", "paper", "scissors"];

    var maxGuess = 10;
    var guessArray = [];

    var wins = 0;
    var losses = 0;

    var dashes;

    var number = Math.floor(Math.random() * wordBank.length);

    var currentWord = wordBank[number];
    console.log(currentWord);
    

    function resetGame () {

        for ( var i = 0; i < currentWord.length; i++)

        {
            guessArray[i] = "_";
        }

        dashes = guessArray.join(" ");
        document.getElementById("letters").innerHTML = dashes;


};

    document.onkeyup = function(event) {
        var userGuess = event.key;
        console.log(userGuess);
        
        document.getElementById("letters-guessed").innerHTML = guessArray;
        
        // var html =
        //     "<p>Letters guessed so far: " + userGuess + "</p>" +
        //     "<p>Gueses remaining: " + maxGuess + "</p>" +
        //     "<p>Wins: " + wins + "</p>" +
        //     "<p>Losses: " + losses + "</p>";
  
        // document.querySelector("#stats").innerHTML = html;

};
    resetGame();