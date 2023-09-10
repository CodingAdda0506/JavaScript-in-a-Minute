/*
    UNARY OPERATOR
    - Unary Plus (+)
    - Unary Negation (-)
    - Increment (++)
    - Decrement (--)
    - Logical Not (!)
    - Betwise Not (~)
    - typeof 
    - delete 
    - void 
*/

// Unary Plus (+)
console.log("---- UNARY PLUS ----");
console.log(+3);
console.log(+"-3");
console.log(+"3.14");
console.log(+true);
console.log(+false);
console.log(+null);
console.log(+"Infinity");

// Unary Negation (-)
console.log("---- UNARY NEGATION ----");
console.log(-3);
console.log(-"-3");
console.log(-"3.14");
console.log(-true);
console.log(-false);
console.log(-null);
console.log(-"Infinity");

// Increment (++)
console.log("---- INCREMENT ----");
let n = 3;
console.log(n++);
console.log(++n);

// Decrement (--)
console.log("---- DECREMENT ----");
n = 3;
console.log(n--);
console.log(--n);

// Logical Not (!)
console.log("---- LOGICAL NOT ----");
console.log(!false);
console.log(!true);

// Betwise Not (~)
console.log("---- BETWISE NOT ----");
console.log(~3);
console.log(~"-3");
console.log(~"3.14");
console.log(~true);
console.log(~false);
console.log(~null);
console.log(~"Infinity");

// typeof
console.log("---- TYPEOF ----");
console.log(typeof 3);
console.log(typeof "coding adda");
console.log(typeof 3.14);
console.log(typeof true);
console.log(typeof infinity);

//delete
console.log("---- DELETE ----");
var variableExample = 1;
delete variableExample;
console.log(variableExample);
