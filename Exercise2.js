const prompt = require('prompt-sync')();

let number = String(prompt("Enter a Number to have it reversed"))
let newNumber = ""
if (number[0] != "-"){
    newNumber = number.split('').reverse().join('')
}
else{
    newNumber = number.split('').reverse()
    newNumber.pop()
    newNumber.unshift("-")
    newNumber = newNumber.join('')
}
console.log(newNumber)