let globalVar = "I'm global!";

function exampleFunction() {
  let localVar = "I'm local!";

  // Accessing local scope variable 'localVar'

  // Accessing local scope variable 'globalVar'
  console.log(globalVar);
}

exampleFunction();

console.log(localVar);
