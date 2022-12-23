import inquirer from "inquirer";

const answers : {
    numberOne : number,
    numberTwo : number,
    operator : string

} = await inquirer.prompt([
    {
            type : "number",
            name : "numberOne",
            message : "kindly entre your 1st no?"
        },
        {
            type : "number",
            name : "numberTwo",
            message : "kindly entre your 2nd no"

        },
        {
            type : "list",
            name : "operate",
            choices : ["+", "-", "*", "/"],
            message : "kindly select operator"
        }
]);
const {numberOne, numberTwo, operator} = answers;
if(numberOne && numberTwo && operator) {
    let result : number = 0;
if(operator === "+"){
    result = numberOne + numberTwo
} else if(operator === "-"){
    result = numberOne - numberTwo
} if(operator === "*"){
    result = numberOne * numberTwo
} if(operator === "/"){
        result = numberOne / numberTwo
} 
console.log("your result is ", + result ) 
}
else{console.log("please entre a valid input");
}  