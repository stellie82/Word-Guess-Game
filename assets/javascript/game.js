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
var letterArray
var correctGuesses = [];
var wrongGuesses = [];
var remainingGuesses;

// Create variables to hold the number of wins, guesses, and losses.  Guesses to start at 9 and count down.
var wins = 0;
var losses = 0;

// Create variables to hold references in the HTML to display information.
var directionsText = document.getElementById("directions-text");
var userGuessText = document.getElementById("userguess-text");
var guessesText = document.getElementById("guesses-text");
var winsText = document.getElementById("wins-text");

// Choose a random word from the movies list.
var chosenMovie = movies[Math.floor(Math.random() * movies.length)];

console.log(chosenMovie);

document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();

    letterArray = chosenMovie.split("");
    console.log(letterArray);

    for (var i = 0; i < letterArray.length; i++) {
        if (userGuess == letterArray[i]) {
            correctGuesses.push(userGuess);
            userGuessText.innerHTML = correctGuesses;
        }
        
        else {
            wrongGuesses.push(userGuess);
            guessesText.innerHTML = wrongGuesses;
        }
    }

    

}

var remainingGuesses = chosenMovie.length;







