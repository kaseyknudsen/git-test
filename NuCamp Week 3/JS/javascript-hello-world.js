// function getName(){
//     const userName = prompt("What is your name?");
//     sayHello(userName);
// }
// function sayHello(name) {
//     // const userName = prompt("What is your name?");
//     alert("Hello " + name + "!");
//     console.log('alert sent!');
// }

// const SuperSecretPassword = "MurphyBrown";
// const password = prompt("Enter the Super Secret Password: ");
// if (password === SuperSecretPassword) {
//     alert("your password is correct!");
//     console.log("password is correct");
// } else {
//     alert("Try Again");
// }

// if (color === "red") {
//     hexColorCode = "FF000";
// } else if (color === "black") {
//     hexColorCode = "#000000";
// } else if (color === "white") {
//     hexColorCode = "#ffffff";
// } else {
//     hexColorCode = null;
// }

const age = prompt("What is your age?");

if (age > 12 && age < 65) {
    ticketPrice = 20;
    alert("Your ticket will be " + "$" + ticketPrice + ".");
} else {
    ticketPrice = 10;
    alert("Your ticket price will be " + "$" + ticketPrice + ".");
}

