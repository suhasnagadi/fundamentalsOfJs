
let focusObj = {

    isEven: function () {
        if (this.number % 2 == 0) {

            this.isEvenNum =true;
            return true;
        } else {
            this.isEvenNum =false;
            return false;
        }

    },

    isPrime : function (){
        
        for(let i=this.number;i>=0;i++){

            let flag = false;

            for(let j=2;j<i;j++){

                if(i%j==0){
                    flag = true;
                }
            }

            if(!flag){
                this.isPrimeNum = true;
                return true;
            }else{
                this.isPrimeNum = false;
                return false;
            }
        }
    },

};

focusObj.number = 10;

console.log(focusObj.isEven());

console.log(focusObj.isPrime());

console.log(focusObj);

console.log(Object.keys(focusObj));

console.log(focusObj['isEven']());

console.log(focusObj['isPrime']());

console.log(focusObj['number']);

for(key of Object.keys(focusObj)){

    console.log(key,typeof focusObj[key]);
}