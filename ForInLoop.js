// for-in loop

// for(const key in object) {
//     Code to be executed for 
//     each element in the 
//     iterable
// }

const Ytchannel = {
    name: "Coding Adda",
    age: 2.5,
    member1: "Aditya",
    member2: "Harikrishnan"
}


for(const key in Ytchannel) {
    console.log(`key => ${key} :: 
    value => ${Ytchannel[key]}`);
}