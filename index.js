#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellowBright("\t \t \nWelcome to the Words Counter! --- Falak Sher Khan \n \t \t"));
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence: ",
    }
]);
let words = answer.sentence.trim().split(" ");
console.log(chalk.bold.blue(words));
console.log(chalk.bold.greenBright("Number of words: " + words.length));
