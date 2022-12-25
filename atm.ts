import inquirer from "inquirer";
interface anstype {
    userId : string,
    userPin : number,
    accountType: string,
    transactionType: string,
    amount: number
}

const answer : anstype = await inquirer.prompt([{
    type: "input",
    name: "userId",
    message: "kindly Enter your id"
},
{
    type: "number",
    name: "userPin",
    message: "kindly Enter your Pin"
},
{
    
        type: "list",
    name: "accountType",
    choices: ["current", "saving"],
    message: "kindly select Your Transaction"
},
{
        type: "list",
    name: "transactionType",
    choices: ["fast cash", "withdraw"],
    message: "kindly select Your Transaction",
   when(answer) {
    return answer.accountType
   }
},
      {    type: "list",
    name: "amount",
    choices: [1000, 2000, 3000, 5000, 10000],
    message: "kindly select Your Transaction",
    when(answer) {
    return answer.transactionType == "fast cash"
   },
},
{ 
    type: "number",
name: "amount",
message: "kindly Enter your Amount",
when(answer) {
    return answer.transactionType == "withdraw"
},  
}
])
//console.log(answer);

if(answer.userId && answer.userPin){

    const balance = Math.floor(Math.random()*10000000);
    //console.log(balance);
    
    const EntreAmount = answer.amount;
    if(balance > EntreAmount){
        const remaining = balance - EntreAmount;
        console.log("your remaining balance is " + remaining);
        

    } 
    else {
        console.log("insufficient balance");
        
    }
}
