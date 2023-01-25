import inquirer from "inquirer";
let todo = [];
let loop = true;
while (loop) {
    const ans = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "what do you add in your todo?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add todo?",
            default: false
        }
    ]);
    const { TODO, addmore } = ans;
    console.log(ans);
    loop = addmore;
    if (TODO) {
        todo.push(TODO);
    }
    else {
        console.log("kindly add valid input");
    }
}
console.log(todo);
