    // Initial Variables
    // var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

    var wordBank = ["rock", "paper", "scissors"];

    var maxGuess = 10;
    var wins = 0;
    var losses = 0;

    var number = Math.floor(Math.random() * wordBank.length);

    var currentWord = wordBank[number];
    console.log(currentWord);
    
    var wordLength = currentWord.length;
    document.getElementById("#letters").innerHTML = "_";

    function resetGame () {



};

    document.onkeyup = function(event) {
        var userGuess = event.key;
        console.log(userGuess);
        
        var html =
            "<p>Letters guessed so far: " + userGuess + "</p>" +
            "<p>Gueses remaining: " + maxGuess + "</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>";
  
        document.querySelector("#stats").innerHTML = html;

};
    resetGame();