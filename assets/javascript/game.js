// Create variables to hold the movie chosen and letters of the movie.
var validLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
var movies = [
    "INTERSTELLAR",
    "ALIENS",
    "CONTACT",
    "GRAVITY",
]

// Create a variable to hold the randomly chosen movie for the user to guess.
var chosenMovie;

// Create variables to hold the number of wins, guesses, and losses.
var wins = 0;
var losses = 0;

function startGame() {

    var correctGuesses = [];
    var wrongGuesses = [];
    var remainingGuesses = 7;
    
    // Choose a random word from the movies list.
    chosenMovie = movies[Math.floor(Math.random() * movies.length)];

    for (a = 0; a < chosenMovie.length; a++) {
        correctGuesses.push("__");
    }

    document.onkeyup = function (event) {

        // List states to check for each letter.
        var isValid = false;
        var correctMatch = false;
        var alreadyGuessed = false;

        // Create variables to hold references in the HTML to display information.
        var messageText = document.getElementById("message-text");
        var userGuessText = document.getElementById("userguess-text");
        var wrongGuessText = document.getElementById("wrong-text");
        var guessesText = document.getElementById("guesses-text");
        var winsText = document.getElementById("wins-text");
        var lossText = document.getElementById("losses-text");

        // Initiate settings for when user first presses a key.
        var userGuess = event.key.toUpperCase();
        messageText.innerHTML = "";
        userGuessText.innerHTML = correctGuesses.join(" ");
        winsText.innerHTML = wins;
        lossText.innerHTML = losses;
        guessesText.innerHTML = remainingGuesses;

        // First check to make sure that the key pressed is a valid letter.
        for (var i = 0; i < validLetters.length; i++) {
            if (userGuess === validLetters.charAt(i)) {
                isValid = true;
            }
        }

        // Check to see if the letter pressed has been already guessed.
        for (var i = 0; i < correctGuesses.length; i++) {
            if (userGuess === correctGuesses[i]) {
                alreadyGuessed = true;
            }
        }

        for (var i = 0; i < wrongGuesses.length; i++) {
            if (userGuess === wrongGuesses[i]) {
                alreadyGuessed = true;
            }
        }

        // See if the pressed key matches a letter in the chosen word and add to the correct guesses array.
        for (var j = 0; j < chosenMovie.length; j++) {
            if (userGuess === chosenMovie.charAt(j)) {
                correctMatch = true;
                correctGuesses[j] = userGuess;
                userGuessText.innerHTML = correctGuesses.join(" ");
            }
        }

        // If the letter is valid but not correct, add to the wrong guesses list.
        if (isValid === true && correctMatch === false && alreadyGuessed === false) {
            remainingGuesses--;
            wrongGuesses.push(userGuess);
            wrongGuessText.innerHTML = wrongGuesses.join(" ");
        }

        // Updates for wins and losses
        if (correctGuesses.join("") === chosenMovie) {
            wins++;
            winsText.innerHTML = wins;
            messageText.innerHTML = "You win!  Press any key to start a new game.";
            reset();
        }

        else if (remainingGuesses === 0) {
            losses++;
            lossText.innerHTML = losses;
            messageText.innerHTML = "Sorry you didn't guess the movie, maybe next time...";
            reset();
        }
    }
}

// Create a function to reset the game.
function reset() {
    if (chosenMovie === "CONTACT") {
        contact();
    }
    
    else if (chosenMovie === "GRAVITY") {
        gravity();
    }

    else if (chosenMovie === "INTERSTELLAR") {
        interstellar();
    }

    else if (chosenMovie === "ALIENS") {
        aliens();
    }
    wrongGuessText.innerHTML = "";
    startGame();
}

// Create functions for changing backgrounds to random picked movies.
function contact() {
    document.body.style.backgroundImage = "url('assets/images/contact.jpg')";
}

function gravity() {
    document.body.style.backgroundImage = "url('assets/images/gravity.jpg')";
}

function interstellar() {
    document.body.style.backgroundImage = "url('assets/images/interstellar.jpg')";
}

function aliens() {
    document.body.style.backgroundImage = "url('assets/images/aliens.jpg')";
}

startGame();
