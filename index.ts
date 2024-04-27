#!/urs/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellow.bold(`\n \t Welcome to convert \'code with muzamil\' - convert \n `))





// Define the list of currencies and their exchange rates

let exchange_rate : any = {
    "USD":1, //Base Currency 
    "EUR":0.9, //European Currency(Euro)
    "JYP":113, //Japenese Currency(yen)
    "CAD":1.3, //Canadian Dollar
    "AUD":1.65,//AUSTRAILAIN Dollar
     "PKR":280, //Pakistan Rupees
}

// Promt the user to selected curriences to convert from am to

let answer = await inquirer.prompt([
    {
        name:"from_currency",
        type:"list",
        message:"Select te currency to convert from:",
        choices:["USD","EUR", "JYP","CAD","AUD","PKR"]
    },
    {
        name:"to_currency",
        type:"list",
        message:"Select the currency to convert into:",
        choices:["USD","EUR", "JYP","CAD","AUD","PKR"]
    },
    {
        name:"amount",
        type:"input",
        message:"Enter amount to convert:"
    }
]);

// perform currenncy by  using formulary
let from_amount = exchange_rate[answer.from_currency];
let to_amount = exchange_rate[answer.to_currency];
let amonut = answer.amount

// formula of converstion

let base_amount =  amonut / from_amount 
let converted_amonut = base_amount * to_amount

// display the converted amount

console.log(`youe convert amont is ${chalk.green(converted_amonut.toFixed(2))}`);
