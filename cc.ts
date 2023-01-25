import inquirer from "inquirer";

let conversion = {
    "PKR" :{
        "USD" : 0.0044,
        "GBP" : 0.0037,
        "PKR" : 1
    },
    "GPB" : {
        "USD" : 1.21,
        "PKR" : 271.79,
        "GBP" : 1
    },
    "USD": {
        "PKR" : 225.50,
        "GBP" : 0.83,
        "USD" : 1
    }
}
const result : {
    from: "PKR"| "USD"|"GBP"|any,
    to: string,
    amount: number
} = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD","GBP"],
        message:"select your currency: "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD","GBP"],
        message:"select your conversion currency: "
    },
    {
        type: "list",
        name: "amount",
        message:"select your conversion amount: "
    }
])

const{from, to, amount} = result;
if(from && to && amount){
   let res =  conversion[from][to] * amount
   console.log(`your convrsion from ${from} to ${to} is ${res}`);
   
}
else{
    console.log("invalid input");
    
}