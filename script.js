let randomNumber; // The random number to guess
let maxGuesses; // Maximum guesses allowed
let rangeMax; // Maximum range of the random number
let remainingGuesses; // Remaining guesses

// Start a new game based on difficulty
document.getElementById("startGame").addEventListener("click", function () {
  const difficulty = document.getElementById("difficulty").value;
  setDifficulty(difficulty);
  randomNumber = Math.floor(Math.random() * rangeMax) + 1; // Generate a random number within range
  remainingGuesses = maxGuesses; // Set remaining guesses based on difficulty
  document.getElementById("remainingGuesses").innerText = remainingGuesses; // Display remaining guesses
  document.querySelector(".guesses").innerText = ""; // Clear previous guesses
  document.querySelector(".lowOrHi").innerText = ""; // Clear messages
  document.getElementById("guessField").value = ""; // Clear input field
  document.getElementById("game").style.display = "block"; // Show the game area
});

// Set difficulty and ranges based on selected difficulty
function setDifficulty(difficulty) {
  if (difficulty === "easy") {
    maxGuesses = 10;
    rangeMax = 50; // Easy: guess from 1 to 50
    document.getElementById("range").innerText = "1 to 50";
  } else if (difficulty === "medium") {
    maxGuesses = 8;
    rangeMax = 100; // Medium: guess from 1 to 100
    document.getElementById("range").innerText = "1 to 100";
  } else if (difficulty === "hard") {
    maxGuesses = 6;
    rangeMax = 200; // Hard: guess from 1 to 200
    document.getElementById("range").innerText = "1 to 200";
  } else if (difficulty === "extreme") {
    maxGuesses = 4; // Extreme: fewer guesses
    rangeMax = 500; // Extreme: guess from 1 to 500
    document.getElementById("range").innerText = "1 to 500";
  }
}

// Event listener for the submit button
document.getElementById("subt").addEventListener("click", function (e) {
  e.preventDefault(); // Prevent form submission
  const userInput = parseInt(document.getElementById("guessField").value); // Get user's guess
  validateGuess(userInput); // Validate the guess
});

// Validate the user's guess
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number"); // Alert if input is not a number
    return;
  }

  if (guess < 1 || guess > rangeMax) {
    alert(`Please enter a number between 1 and ${rangeMax}`); // Alert if input is out of range
    return;
  }

  remainingGuesses--; // Decrease the remaining guesses
  document.querySelector(".guesses").innerText += `${guess} `; // Display the user's guess
  document.getElementById("remainingGuesses").innerText = remainingGuesses; // Update remaining guesses

  if (guess === randomNumber) {
    displayMessage(`Congratulations! You guessed it right! 🎉`); // Success message
    endGame(); // End the game
  } else if (remainingGuesses === 0) {
    displayMessage(`Game Over! The correct number was ${randomNumber}.`); // Game over message
    endGame(); // End the game
  } else {
    if (guess < randomNumber) {
      displayMessage(`Your guess is too low!`); // Hint if guess is low
    } else {
      displayMessage(`Your guess is too high!`); // Hint if guess is high
    }
  }

  document.getElementById("guessField").value = ""; // Clear input field
}

// Display messages based on the user's guess
function displayMessage(message) {
  document.querySelector(".lowOrHi").innerHTML = `<h2>${message}</h2>`;
}

// End the game and show a "Start New Game" button
function endGame() {
  document.getElementById("guessField").setAttribute("disabled", "disabled"); // Disable input
  document.getElementById(
    "gameOverMessage"
  ).innerHTML = `<button id="newGame">Start New Game</button>`; // Show new game button
  document.getElementById("newGame").addEventListener("click", resetGame); // Add event listener for new game
}

// Reset the game for a new round
function resetGame() {
  remainingGuesses = maxGuesses; // Reset remaining guesses
  randomNumber = Math.floor(Math.random() * rangeMax) + 1; // Generate a new random number
  document.querySelector(".guesses").innerText = ""; // Clear previous guesses
  document.getElementById("remainingGuesses").innerText = remainingGuesses; // Update remaining guesses
  document.querySelector(".lowOrHi").innerHTML = ""; // Clear messages
  document.getElementById("guessField").removeAttribute("disabled"); // Enable input field
  document.getElementById("guessField").value = ""; // Clear input field
  document.getElementById("gameOverMessage").innerHTML = ""; // Clear game over message
}
