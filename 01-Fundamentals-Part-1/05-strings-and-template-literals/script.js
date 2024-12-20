
let firstName = 'Suhas';

let lastName = 'Venugopal';

let birthYear = 1987;

let currentYear = new Date().getFullYear();

console.log(currentYear);

/**
 * 
 * Here type co-ersion is happening
 * which is converting the expression
 * (currentYear-birthYear) to strings
 */

let sampleString = 'The name is '+firstName+ ' '+ lastName + ' and the age is '+ (currentYear-birthYear);

console.log(sampleString);

/**
 * The same can be achieved by using template literals
 */

let sampleTemplateLiteral = `The name is ${firstName} ${lastName} and the age is ${currentYear-birthYear}`;

console.log(sampleTemplateLiteral);

/**
 * Multiline Strings
 */

let multilineString = 'This is a \n\
multiline string';

console.log(multilineString);

let multilineTemplateLiteral = `This is a
multiline templete literal`;

console.log(multilineTemplateLiteral);