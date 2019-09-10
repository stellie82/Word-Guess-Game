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
    "Apollo 13",
    "Gravity",
    "2001: A Space Odyssey",
    "The Martian"
]

var chosenMovie;
var lettersMovie = [];

// Create variables to hold the number of wins, guesses, and losses.  Guesses to start at 9 and count down.
var wins = 0;
var losses = 0;
var guesses;

// Choose a random word from the movies list.
var chosenMovie = movies[Math.floor(Math.random() * movies.length)];

for (var i = 0; i < chosenMovie.length; i++) {
    lettersMovie[i] = "_";
}

var remainingGuesses = randomWord.length;

// Create variables to hold references in the HTML to display information.
var userGuessText = document.getElementById("userguess-text");
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesText = document.getElementById("guesses-text");



document.onkeyup = function (event) {

    var userGuess = event.key;

}





   
};