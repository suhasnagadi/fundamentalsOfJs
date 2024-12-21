/**
 * These are the five falsy values in js
 * null,undifined,Nan,0 & ''
 */

console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(''));

/**
 * These are all truthy
 */

console.log(Boolean(1));
console.log(Boolean(0.1));
console.log(Boolean({}));
console.log(Boolean('Suhas'));

console.log([]==[]); // false

/**
 * console.log([]===[]);
 * console.log([1,2,3]===[1,2,3]);
 * console.log({}==={});
 */

console.log({}=={}); //false


