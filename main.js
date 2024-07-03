/*
let todo=[];

let req = prompt("please enter your request");
while(true){
    if(req=="quit"){
        console.log("quiting app");
        break;
    }

    if(req=="list"){
        console.log("------------------");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("------------------");
    }else if(req=="add"){
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("Task added");
    }else if(req== "delete"){
        let idx = prompt("Plaese enter the task you want to remove");
        todo.splice(idx, 1);
        console.log("Task deleted");
    }else{
        console.log("Wrong request!");
    }

    req = prompt("please enter your request");
}
*/


const max=prompt("Enter the max number");
const random = Math.floor(Math.random() * max) + 1;
let num = prompt("Enter the number between 1 to " + max + " or type 'quit' to exit:");
let i=5;
while(i>=1){
    if (num == "quit") {
        console.log("Quitting the game.");
        break;
    }

    if (num == random) {
        console.log("Congratulations! The number was " + random);
        break;
    }else if(num<random){
        num = prompt("Your number is too small! You have "+ i +" time chance");
    }else{
        num = prompt("Your number is too Large! You have " + i +" time chance");
    }
    i--;
}
if(num != random){
    console.log("Game Over!");
}