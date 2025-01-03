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

let inputElement=document.querySelector('section.left>input.guess');

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

const innerFunction = function(){
    console.log(inputElement.value);
}


document.querySelector('.btn.check').addEventListener('click', function(){

    console.log(inputElement.value);

    /**
     * This is an async logging dont know what is the use
     */
    actualLog(inputElement.value);    
});

const logger = (async (something)=>{

    console.log(something);
});



const actualLog = (async(something)=>{

    await logger(something);
});

/**
 * This does not work for strange reasons
 */

// let inputValue = document.querySelector('.btn.check').addEventListener('click',innerFunction());

