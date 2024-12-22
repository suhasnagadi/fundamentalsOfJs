
let numberArray = [1,2,3,4];

console.log(numberArray);//[1,2,3,4]

numberArray.push(5);

console.log(numberArray);//[1,2,3,4,5]

numberArray.unshift(-5);

console.log(numberArray);//[-5,1,2,3,4,5];

numberArray.pop();

console.log(numberArray);//[-5,1,2,3,4];

numberArray.shift();

console.log(numberArray);//[1,2,3,4];

console.log(numberArray.indexOf(1));//0

console.log(numberArray.indexOf(5));//-1

console.log(numberArray.includes(2));//true

console.log(numberArray.includes(5));//false

console.log(numberArray.includes('1'));//false