
//Example code:
// function rollDice() {
//     let goldCoins = 0;
//     for (let i = 0; i < 10; i++) {
//         const roll = Math.floor(Math.random() * 6) + 1;
//         alert("Your roll was a " + roll + ".");
//         if (roll === 1) {
//             alert("Game over, no more rolls.")
//             break;
//         }
//         if (goldCoins !== 0 && roll === 4) {
//             goldCoins -= 1;
//             alert("You rolled a 4. One gold coin will be subtracted. You now have " + goldCoins + " coins.")
//         }
//         if (roll < 5) {
//             alert("Roll again. You have a total of " + goldCoins + " coins.")
//             continue;
//         }
//         goldCoins += roll;
//         alert("Congratulations! You win " + roll + " gold coins! You now have a total of " + goldCoins + " coins.");      
//     }
//     alert("You have won a total of " + goldCoins + " gold coins.");

// }

//same program using else-if statements:
function rollDice() {
    let goldCoins = 0;
    for (i = 1; i < 11; i++) {
        
        const roll = Math.floor(Math.random() * 6) + 1;
        if (i !== 1) {
            alert("This is roll # " + i + ".");
        } 
        if (i === 10) {
            alert("You've reached your maximum number of rolls. You have" + goldCoins + " gold coins. Thanks for playing!")
            break;
        } else if (roll === 1) {
            alert("Your roll was a " + roll + ". Game over. No more rolls.");
            break;
        } else if (goldCoins !== 0 && roll === 4) {
            goldCoins -= 1;
            alert("You rolled a 4. One gold coin will be subtracted. You now have " + goldCoins + " gold coins.");
            continue;
        } else if (roll < 5) {
            alert("Your roll was a " + roll + ". Roll again. You have a total of " + goldCoins + " coins.");       
            continue;
        } else {
            goldCoins += roll;
            alert("Congratulations! You win " + roll + " gold coins! You have a total of " + goldCoins + " gold coins." )
        }
            //alert("You have a total of " + goldCoins + " gold coins.");
    }
}