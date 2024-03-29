#! /usr/bin/env node

import inquirer from "inquirer";


//  1)Computer with generate a random number=done

// 2) User input for guessing number=done

// 3) Compare user input with computer generated number and show result =done

const randomNumber =Math.floor( Math.random() *6+1);


const answers = await inquirer.prompt([{
   name: "userGuessNumber",
   type: "number",
   message: "please guess a number between 1-6"
},
]);


if(answers.userGuessNumber === randomNumber){
   console.log('Congratulations! you guessed right number')
}else{
   console.log("You guessed wrong number")
};
