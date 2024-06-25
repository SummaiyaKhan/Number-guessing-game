#! /usr/bin/env node

import inquirer from "inquirer";

// 1) computer will genrate a random number;
// 2) user input for guessing number;
// 3) compare user input with computer gerated number and show result;

// const randomNumber = 13;
const randomNumber = Math.floor(Math.random() * 6 + 1)

const answers = await inquirer.prompt([
{
    name: "userGuessNumber",
    type: "number",
    message: "please guess a number between 1-10:",

}
]);

if(answers.userGuessNumber === randomNumber){
console.log("Congratulations! you are guessed right number");

}else {
console.log("you guessed worng number");

}
















