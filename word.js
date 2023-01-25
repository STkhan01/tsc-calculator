import inquirer from "inquirer";
const final = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "entre your sentence to count the word: "
    }
]);
const words = final.sentence.split(" ");
console.log(`your sentence of words are ${words.length}`);
