import inquirer from "inquirer";

const final : {
    sentence: string
}= await inquirer.prompt([
    {
        name: "sentence",
        type:"input",
    message: "entre your sentence to count the word: "
    }
])
const words = final.sentence.trim().split(" ");
console.log(`your sentence of words are ${words.length}`);
