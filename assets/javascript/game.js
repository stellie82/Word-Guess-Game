// Wins: (# of times user guessed the word correctly).
// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
// As the user guesses the correct letters, reveal them: m a d o _  _ a.
// Number of Guesses Remaining: (# of guesses remaining for the user).
// Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
// After the user wins/loses the game should automatically choose another word and make the user play it.

// Create variables to hold the movie chosen and letters of the movie.
var validLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
var movies = [
    "INTERSTELLAR",
    "ALIENS",
    "CONTACT",
    "GRAVITY",
    "STAR WARS",
    "STAR TREK",
]

var chosenMovie;
var correctGuesses = [];
var wrongGuesses = [];

// Create variables to hold the number of wins, guesses, and losses.  Guesses to start at 9 and count down.
var wins = 0;
var losses = 0;
var remainingGuesses;

// Choose a random word from the movies list.
var chosenMovie = movies[Math.floor(Math.random() * movies.length)];
console.log(chosenMovie);

for (a = 0; a < chosenMovie.length; a++) {
    correctGuesses.push("__");
}

document.onkeyup = function (event) {
    console.log("I'm here");

    var isValid = false;
    var correctMatch = false;
    var alreadyGuessed = false;

    // Create variables to hold references in the HTML to display information.
    var directionsText = document.getElementById("directions-text");
    var userGuessText = document.getElementById("userguess-text");
    var wrongGuessText = document.getElementById("wrong-text");
    var guessesText = document.getElementById("guesses-text");
    var winsText = document.getElementById("wins-text");
    var lossText = document.getElementById("losses-text");

    var userGuess = event.key.toUpperCase();
    console.log("User guess: " + userGuess);
    userGuessText.innerHTML = correctGuesses.join(" ");
    winsText.innerHTML = wins;
    lossText.innerHTML = losses;


    for (var i = 0; i < validLetters.length; i++) {
        if (userGuess === validLetters.charAt(i)) {
            isValid = true;
        }
    }

    console.log("Valid: " + isValid);

    for (var i = 0; i < correctGuesses.length; i++) {
        if (userGuess === correctGuesses[i]) {
            alreadyGuessed = true;
            console.log("Correct dupe: " + alreadyGuessed);
        }
    }

    for (var j = 0; j < chosenMovie.length; j++) {
        if (userGuess === chosenMovie.charAt(j)) {
            correctMatch = true;
            correctGuesses[j] = userGuess;
            userGuessText.innerHTML = correctGuesses.join(" ");
            console.log(correctGuesses);
        }
    }

    console.log("Correct match: " + correctMatch);

    for (var i = 0; i < wrongGuesses.length; i++) {
        if (userGuess === wrongGuesses[i]) {
            alreadyGuessed = true;
            console.log("Wrong dupe: " + alreadyGuessed);
        }
    }

    if (isValid === true && correctMatch === false) {
        wrongGuesses.push(userGuess);
        wrongGuessText.innerHTML = wrongGuesses.join(" ");
        console.log(wrongGuesses);
    }

    if (alreadyGuessed === true && isValid === true && correctMatch === false) {
        wrongGuesses.pop();
        wrongGuessText.innerHTML = wrongGuesses.join(" ");
        console.log(wrongGuesses);
    }

    // Updates for wins and losses
    if (correctGuesses.join("") === chosenMovie) {
        wins++;
        winsText.innerHTML = wins;
    }

    if (wrongGuesses.length > 2) {
        losses++;
        lossText.innerHTML = losses;
        alert("Game over man!");
    }
}





