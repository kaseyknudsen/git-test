
let NumTries = 0;

function runGame() {
    const getNum = Math.floor(Math.random() * 100) + 1;
    let userGuessString = "";
    let guessNumber = 0;
    let correct = false;   
    do {
        userGuessString = prompt("Guess a number between 1 & 100, inclusive. \n\n");
        guessNumber = +userGuessString; //+is a unary operator that performs numeric conversion
        NumTries += 1;
        if (userGuessString === null) {
            return
        }
        correct = checkGuess(guessNumber, getNum);   
    } while (!correct); //repeat while not correct
    alert("Congrats! You guessed it! The number was " + getNum + ".\n\nIt took you " + NumTries + " tries. Thanks for playing!");
    playAgain()
}

function checkGuess (guessNumber, getNum) {
    let correct2 = false;

    if (isNaN(guessNumber)) {
        alert("You haven't entered a number.")
    } else if ((guessNumber < 1) || (guessNumber > 100)) {
        alert("Please enter a number between 1 & 100");
    } else if (guessNumber > getNum) {
        alert("Too big.\n\nYou've guessed " + NumTries + " times.");
    } else if (guessNumber < getNum) {
        alert("Too small.\n\nYou've guessed " + NumTries + " times.");
    } else {
        correct2 = true;
    }
    return correct2;
}
function playAgain() {
    const UserPlayAgain = prompt("Would you like to play again? ").toLowerCase();
    if ((UserPlayAgain === "yes") || (UserPlayAgain === "y")) {
        alert("Fantastic! Click the start game button.");
    } else {  
        return
    }
}
