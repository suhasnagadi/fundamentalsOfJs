'use strict';

console.log(document.querySelector('.message'));

/**
 * getting the text content of the html element
 */
let sometext = document.querySelector('.message').textContent;

/**
 * document.querySelector().innerHTML also works
 */

console.log(document.querySelector('.message').innerHTML);

console.log(sometext);

/**
 * to set the text content of the html element
 */

document.querySelector('.message').textContent = 'Some new value';

/**
 * to select input element
 */

let inputElement = document.querySelector('section.left>input.guess');

console.log(inputElement);

/**
 * to select the content of the input field
 */

console.log(inputElement.value);

/**
 * to set the value in the input text field
 */

inputElement.value = 10;

/**
 * We can set the value to be null as well
 */

inputElement.value = null;

const innerFunction = function () {
    console.log(inputElement.value);
}

let score = 20;

let highScore = 0;

let number = Math.round(Math.random() * 20);

if (!number) number = 1;

console.log(number);

document.querySelector('.number').textContent = '?';

document.querySelector('.btn.check').addEventListener('click', function () {

    console.log(inputElement.value);

    /**
     * This is an async logging dont know what is the use
     */
    actualLog(inputElement.value);

    const guess = Number(inputElement.value);

    const setMessage = function(message){

        document.querySelector('.message').textContent = message;
    }

    if (!guess) {
        setMessage('No Number!!!');
    } else if (guess === number) {
        // document.querySelector('.message').textContent = 'Correct Number!!!';
        setMessage('Correct Number!!!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = number;
        if(score>highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== number) {
        if(score>1){
            // document.querySelector('.message').textContent = 'Too High!!!';
            guess>number?setMessage('Too High!!!'):setMessage('Too Low!!!');
            document.querySelector('.score').textContent = --score;
        } else {
            // document.querySelector('.message').textContent = 'You Lost the Game!!!';
            setMessage('You Lost the Game!!!');
            document.querySelector('.score').textContent = 0;
        }
        
    } 

});

document.querySelector('.again').addEventListener('click',function(){

    number = Math.round(Math.random() * 20);

    if (!number) number = 1;

    console.log(number);

    score = 20;

    document.querySelector('.guess').value = null;

    document.querySelector('.message').textContent = 'Start guessing...';

    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor= '#222';

    document.querySelector('.number').style.width = '15rem';

})

const logger = (async (something) => {

    console.log(something);
});



const actualLog = (async (something) => {

    await logger(something);
});

/**
 * This does not work for strange reasons
 */

// let inputValue = document.querySelector('.btn.check').addEventListener('click',innerFunction());

