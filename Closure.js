// Closures in Javascript

function outerFunction() {
  let outerVar = "I'm outer!";

  function innerFunction() {
    console.log(outerVar);
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample();
