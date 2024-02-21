// var, let , const

// var: No reason to use var . that means we will not use var.

// let: Allow it to reassign value.
// ex-
/* let money = 25;
money = 35;
console.log(money); */

// or,
/* let count = 0;
count = count + 25;
console.log(count); */


// const: Do not allow it to reassign value.
// ex-
/* const money = 15;
money = 25;
console.log(money); */
// it will be error
// but we can use like this
const money = 10;
const rich = money + 15;
console.log(rich);
// there will be no error.



// or,
/* const count = 0;
count = count + 10;
console.log(count); */
// it will show error as well






/* ----Array--*/

const numbers = [10, 25, 27, 1, 9, 54];
// numbers = [3, 77, 9, 2, 65, 19]; this is not possible to reassign value

numbers [2] = 30;
console.log(numbers); //this is possible to change any value inside array when we use const but not possible to reassign value. also we can do push and pop.

numbers.push(10,24);
console.log(numbers);






/* ----For object------- */
// same array er moto amra reassign mane new ekta object banate parbo na smae name er but vetorer value chaile change korte parbo const use korle but let use korle mara sob e parbo

const students = {
    name: 'moyna pakhi',
    age: 10
}
console.log(students);
/* students = {
    name:'agun pakhi',
    age: 15
}
console.log(students);  error asheb karon reassign posiible na but vitorer value change korte parbo*/


students.name = 'kokil pakhi';
console.log(students);




/* ------for loop er khetre---- */
// for loop er vitorer variable amra const diye declare korle taile error khabo but let diye declare korle problm hobe na
/* const sum = 0;
for(const i = 0; i<10; i++){
    sum = sum + i;

}  error ashbe */

// or,

/* let sum = 0;
for(let i = 0; i<10; i++){
    sum = sum + i;

}  // eta error ashbe na */


// or,


/* let sum = 0;
for(let i = 0; i<10; i++){
    const num = i;
    sum = sum + num;

}   // eta abr error ashbe na*/








