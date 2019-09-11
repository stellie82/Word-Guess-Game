// Wins: (# of times user guessed the word correctly).
// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
// As the user guesses the correct letters, reveal them: m a d o _  _ a.
// Number of Guesses Remaining: (# of guesses remaining for the user).
// Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
// After the user wins/loses the game should automatically choose another word and make the user play it.

// Create variables to hold the movie chosen and letters of the movie.
var movies = [
    "Interstellar",
    "Alien",
    "Contact",
    "Star Wars",
    "Star Trek",
    "Wall-E",
]

var chosenMovie;
var letterArray = [];
var correctGuesses = [];
var wrongGuesses = [];

// Create variables to hold the number of wins, guesses, and losses.  Guesses to start at 9 and count down.
var wins = 0;
var losses = 0;
var remainingGuesses;

// Choose a random word from the movies list.
var chosenMovie = movies[Math.floor(Math.random() * movies.length)];

console.log(chosenMovie);
letterArray = chosenMovie.split("");
console.log(letterArray);

document.onkeyup = function (event) {

    // Create variables to hold references in the HTML to display information.
    var directionsText = document.getElementById("directions-text");
    var userGuessText = document.getElementById("userguess-text");
    var wrongGuessText = document.getElementById("wrong-text");
    var guessesText = document.getElementById("guesses-text");
    var winsText = document.getElementById("wins-text");

    var userGuess = event.key.toLowerCase();

    var letterPosition = -1;
    for (var i = 0; i < letterArray.length; i++) {
        if (userGuess == letterArray[i]) {
            letterPosition = i;
            correctGuesses.push(letterArray[i]);
            userGuessText.innerHTML = correctGuesses.join(" ");
        }

        else {
            wrongGuesses.push(letterArray[i]);
            wrongGuessText.innerHTML = wrongGuesses.join(" ");
        }
    }



}

// var remainingGuesses = chosenMovie.length;






