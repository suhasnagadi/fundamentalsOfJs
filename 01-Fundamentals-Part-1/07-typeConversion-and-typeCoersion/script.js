
let birthYear = '1987';

let age = 18;

/**
 * The Number() here will convert the type 
 * of the variable to Number
 */


let currentYear = Number(birthYear)+18;

console.log(currentYear); // here the output will be 2005

console.log( typeof currentYear); // out put is number

/**
 * In console.log this is automatically handled
 */

console.log( 'I am '+age+ ' years old !'); //I am 18 years old !

/**
 * This expression will convert the 23 and 10 to numbers 
 * because only + is overloaded and - opeartor is not
 */
console.log('23'-'10'-3); // output will be 10

console.log(typeof ('23'-'10'-3)); //output number 

/**
 * The below expresion is evalauted as follows
 * The 'I am '+'23' is converted to 'I am 23'
 * and since the adjoining operator is - the 'I am 23'
 * is converted to a number which is not possible
 * so js has a variable called Nan which is a special variable
 * of the number type and further Nan-10-3 evaluates as Nan
 * because any number when opearted on with Nan returns a Nan
 * Further the remianing part of the expression ' years old' is a string
 * and the Nan will be converted to String and concatinated with ' years old' is a string
 * resulting in the output 'NaN years old'
 */
console.log('I am '+'23'-'10'-3+' years old'); //NaN years old

/**
 * 23 is a Number, but '10' is a string
 * hence the Number 23 is converted to '23'
 * and concatinated with '10' to form '2310'
 * further since 3 is a number but the preceeding
 * expression is returning a string the number 3 is also
 * converted to '3' and concatinated resulting in '23103'
 */
console.log(23+'10'+3); //'23103'

/**
 * isNan() function checks whether a number is Nan
 */

console.log(isNaN(Number('Suhas'))); // true

