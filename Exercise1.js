const prompt = require('prompt-sync')();

let numbers = [];
let input = 0;

let numberCount = Number(prompt("How many numbers would you like to enter?"))
for (let i=0; i < numberCount; i++){
    let input = Number(prompt("Enter a number"))
    numbers.push(input)
};

let maximum = numbers[0]

for (let i = 1; i < numberCount; i++){
    if (maximum < numbers[i]){
        maximum = numbers[i]
    }
}

console.log(maximum)