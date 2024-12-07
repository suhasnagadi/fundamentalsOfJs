let age = 30;

console.log(age);

age = 31;

console.log(age);

const yearOfBirth = 1987;

console.log(yearOfBirth);

/*

This is not allowed in js

we will get 

Uncaught TypeError: Assignment to constant variable.

yearOfBirth = 1990;

console.log(yearOfBirth);

*/

var a = 1;

console.log(a);

a = 2;

console.log(a);

/* var and let are almost same 
var is function scoped and 
let is block scoped */