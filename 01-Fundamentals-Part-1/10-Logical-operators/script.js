let inputNumber = Number(prompt('Enter number to see if its divisible by 6'));

console.log(inputNumber % 2);

console.log(inputNumber % 3);

if (inputNumber % 2 == 0 && inputNumber % 3 == 0 && inputNumber != 0) {

    console.log(`The ${inputNumber} is divisible by 6`);
} else {
    console.log(`The ${inputNumber} is not divisible by 6`);
}

inputNumber = prompt('Enter number to see if its divisible by 5');

console.log('hi'.length)

if ((inputNumber.charAt(inputNumber.length - 1) == '0' || inputNumber.charAt(inputNumber.length - 1) == '5') && inputNumber != '0') {
    console.log(`The ${inputNumber} is divisible by 5`);
} else {
    console.log(`The ${inputNumber} is not divisible by 5`);
}
