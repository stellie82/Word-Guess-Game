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

// Create variables to hold the number of wins, guesses, and losses.  Guesses to start at 9 and count down.
var wins = 0;
var losses = 0;

function startGame() {

    var correctGuesses = [];
    var wrongGuesses = [];
    var remainingGuesses = 7;

    // Choose a random word from the movies list.
    var chosenMovie = movies[Math.floor(Math.random() * movies.length)];
    console.log(chosenMovie);

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

        console.log("Valid: " + isValid);

        // Check to see if the letter pressed has been already guessed.
        for (var i = 0; i < correctGuesses.length; i++) {
            if (userGuess === correctGuesses[i]) {
                alreadyGuessed = true;
                console.log("Correct dupe: " + alreadyGuessed);
            }
        }
        // See if the pressed key matches a letter in the chosen word and add to the correct guesses array.
        for (var j = 0; j < chosenMovie.length; j++) {
            if (userGuess === chosenMovie.charAt(j)) {
                correctMatch = true;
                correctGuesses[j] = userGuess;
                userGuessText.innerHTML = correctGuesses.join(" ");
                console.log(correctGuesses);
            }
        }

        console.log("Correct match: " + correctMatch);

        // Check to see if the letter pressed has been already guessed.
        for (var i = 0; i < wrongGuesses.length; i++) {
            if (userGuess === wrongGuesses[i]) {
                alreadyGuessed = true;
                console.log("Wrong dupe: " + alreadyGuessed);
            }
        }

        // If the letter is not either valid or correct, add to the wrong guesses list.
        if (isValid === true && correctMatch === false && alreadyGuessed === false) {
            remainingGuesses--;
            wrongGuesses.push(userGuess);
            wrongGuessText.innerHTML = wrongGuesses.join(" ");
            console.log(wrongGuesses);
        }

        // Updates for wins and losses
        if (correctGuesses.join("") === chosenMovie) {
            wins++;
            winsText.innerHTML = wins;
            messageText.innerHTML = "You win!";
            reset();
        }

        if (wrongGuesses.length > 7 || remainingGuesses === 0) {
            losses++;
            lossText.innerHTML = losses;
            messageText.innerHTML = "Sorry you didn't guess the movie, maybe next time...";
            reset();
        }

        if (alreadyGuessed === true) {
            alert("You have already guessed that letter");
        }
    }
}

function reset() {
    if (chosenMovie === "CONTACT") {
        contact();
    }
    // else if (chosenMovie === "")
    startGame();
    alert("Click any button to guess a new movie");
}

function contact() {
    document.getElementById("movie").style.backgroundImage = "url('../images/contact.jpg')";
}

startGame();
