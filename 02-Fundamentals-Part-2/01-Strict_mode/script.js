'use strict';

let someTruthyValue;

if(someTruthyValue){
    console.log('the value is true');
}else{
    console.log('the value is false');
}

if(sometrutyValue){ //Uncaught ReferenceError: sometrutyVAlue is not defined will be thrown only if strict mode is used
    console.log('the value is true');
}else {
    console.log('the value is false');
}