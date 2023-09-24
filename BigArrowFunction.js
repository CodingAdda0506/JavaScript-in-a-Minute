/*
    Big Arrow Function in JavaScript

    const function_name = () => {
        // code here
    }

*/
let name = "Coding Adda";
let age = 2.5;

const print = (name, age) => {
    return `Our channel's name is ${name} and our channel's age is ${age} years.`;
}

const output = print(name, age);
console.log(output);