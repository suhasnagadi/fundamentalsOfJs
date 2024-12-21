
let age = Number(prompt(`Enter the age`));

if(age>=18){
    console.log(`The Person can get a Driver's Licence`);
}else{
    console.log(`The person has to wait for ${18-age} years to get driver's licence`);
}