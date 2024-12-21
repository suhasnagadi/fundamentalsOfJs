/**
 * '==' is called a loose equality operator
 * it does type coersion and check the equality
 * '===' is called a deep equality operator
 * it does not do type coersion and will check the value as well 
 * as the datatype
 */

console.log('18' == 18);// true

console.log('18' === 18);// false

console.log(18 === 18);//true


console.log([] == []); // false


/**
 * This is because all arrays are objects
 * and no two objects can never be compared 
 * for equality
 * 
 * console.log([]===[]);false
 * console.log([1,2,3]===[1,2,3]);false
 * console.log({}==={});false
 */

console.log({} == {}); //false

let a = [1, 2, 3];

let b = a;

/**
 * This returns true because
 * the two variables are referencing 
 * the same memrory allocation
 */

console.log(a === b);

console.log(a == b);

let x = {
    prop1: 1,
    prop2: "smapleString"
}

let y = x;

y.prop3 = true;

/**
 * Adding the property to y
 * also reflects for x because 
 * they are representing the same obj
 */
console.log(x, y);//{prop1: 1, prop2: 'smapleString', prop3: true},{prop1: 1, prop2: 'smapleString', prop3: true}

let p = [0, 1];

let q = p;

q[2] = 2;

/**Same logic
 * goes for arrays as well 
 */

console.log(p, q);//[0, 1, 2] ,[0, 1, 2]
