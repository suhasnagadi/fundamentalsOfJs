
function isPrime(inputNumber){

    for(let i=inputNumber;i>=0;i++){

        let flag = false;

        for(let j=2;j<i;j++){

            if(i%j==0){
                flag = true;
            }
        }

        if(!flag){

            return alert(`${inputNumber} is prime`);
    
        }else{
    
            return alert(`${inputNumber} is Not prime`);
        }
    }

}

let inputNumber = Number(prompt(`Enter Number to find out if its prime`));

isPrime(inputNumber);

const primeNumberTill = function primeNumberTill(limit){

    let primeArray = [];

    for(let i = 0; i<limit; i++){

        let flag = false;

        for(let j=2; j<i;j++){

            if(i%j==0){

                flag = true;
            }
        }

        if(!flag){
            primeArray.push(i);
        }
    }

    return primeArray;
}

let limit = Number(prompt(`Enter the Limit till you want the prime number`));

alert(primeNumberTill(limit));

const nthPrimeNumber = function (n){

    let primeArray = [];

    for(let i=0;i>-1;i++){

        let flag = false;

        for(let j=2;j<i;j++){

            if(i%j==0){
                flag = true;
            }
        }

        if(!flag){
            primeArray.push(i);
        }

        if(primeArray.length == n){

            break;
        }
    }

    return `The ${n}th prime number is ${primeArray[primeArray.length-1]} and here is the array ${primeArray}`;

}

let nOfNthPrime = Number(prompt(`Enter the nth number of which prime is expected`));

alert(nthPrimeNumber(nOfNthPrime));

