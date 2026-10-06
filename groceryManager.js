const prompt = require('prompt-sync')();

let groceryList = [];

balls = true;
while(balls == true){
    console.log("\nEnter 1 to add items to the list\nEnter 2 to search for items in the list\nEnter 3 to remove items from the list\nEnter 4 to print the list\nEnter QUIT to quit")
    let directoryInput = String(prompt(""));

    if (directoryInput == "1"){
        let gNumber = (Number(prompt("Enter # of Groceries:")));
        for (let i = 0; i < gNumber; i++){
            
            let grocery = (String(prompt("Enter grocery name:")));

            while(groceryList.includes(grocery.toLowerCase())){
                console.log("Already Present")
                grocery = (String(prompt("Enter grocery name:")));
            }
            groceryList.push(grocery.toLowerCase());

        };
    }

    else if (directoryInput == "2"){
        let search = String(prompt("Enter Grocery to Search For:"));
        if (groceryList.includes(search.toLowerCase())){
            console.log("Found")
        }
        else{
            console.log("Not Found")
        };
    }

    else if (directoryInput == "3"){
        let removedItem = String(prompt("Enter grocery name you want removed:"))
        groceryList = groceryList.filter(item => item.toLowerCase() !== removedItem.toLowerCase());
    }

    else if (directoryInput == "4"){
        console.log("Grocery List:")
        for(let i=0; i < (groceryList.length); i++){
            console.log((i+1), ".", groceryList[i])
        };
    }
    
    else if (directoryInput.toLowerCase() == "quit"){
        balls = false
    }
}