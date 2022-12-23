import inquirer from "inquirer";

const systemGeneratedNumber =  Math.floor(Math.random()*10);
//console.log(systemGeneratedNumber);

const answers1: {
    user: number
} = await inquirer.prompt([
    {
        type: "number",
        name: "user",
        message: "kindly write your guessing Number bw 1 to 10: "
    }
    
])

const {user} = answers1
console.log(user, "user", systemGeneratedNumber, "sys");

if(user === systemGeneratedNumber){
    console.log("yaahhooo your answer is correct \n you are winner");
}
else{
    console.log("sorry! try again");
    
}
