const prompt = require('prompt-sync')();

let text = String(prompt("Enter text:"))

let newtext = "";

for (let i = 0; i < text.length; i++) {
    let character = text[i];
    if (character >= "a" && character <= "z") {
        character = String.fromCharCode(character.charCodeAt(0) - 32);
    }
    newtext += character;
}

console.log(newtext);