// Declare the favorite number
const favoriteNumber = 9;

// Variable to hold the user's guess
let userGuess = null;

// while loop
while (userGuess !== favoriteNumber) {
    userGuess = Number(prompt("Guess my favorite number:"));

    if (userGuess < favoriteNumber) {
        console.log("Too low!");
    } else if (userGuess > favoriteNumber) {
        console.log("Too high!");
    } else if (userGuess === favoriteNumber) {
        console.log("Correct!");
    } else {
        console.log("Please enter a valid number.");
    }
}
