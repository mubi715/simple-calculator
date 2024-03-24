#! /usr/bin/env node


import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter secound number", type: "number", name: "secondNumber" },
  { message: "select one of operator to selection",type:"list",name:"operator",choices:["addition","subtraction","multiplicatio","division"] },
  
]);
console.log(answer);
if(answer.operator==="addition"){
    console.log(`your answer is ${answer.firstNumber+answer.secondNumber}`);
    
}else if(answer.operator==="subtraction"){
    console.log(`your answer is ${answer.firstNumber-answer.secondNumber}`);
    
} else if
(answer.operator==="multiplication"){
    console.log(`your answer is ${answer.firstNumber*answer.secondNumber}`);
    
} else if
(answer.operator==="division"){
    console.log(`your answer is ${answer.firstNumber/answer.secondNumber}`);
    
}
else{
    console.log("Enter a valid operator");
    
}
