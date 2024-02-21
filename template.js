// template string use kore amra khub sohoje boro string line likhte pari and new line add kore string sentence likhte pari//
/* ---template string use korer jonno amra (` ${} `) backtick sign use kori -- */

// norma way
const a = 10;
const b = 20;
/* const result = 'The sum of the number' + ' '+ a + ' ' + 'and'+ ' ' + b + ' ' + 'is' + ' ' + (a + b); 
console.log(result);
*/


// by use template string
const result = `The sum of the number ${a} and ${b} is ${a + b}`;
console.log(result);


// also we add new line in a string by use template string

const email = `john cena
mara mari
korba naki`;
console.log(email);


/* ----for access array value by use template string-- */
const numbers = [10, 23, 4, 5, 67];
const numb = `the numbers of the 3 index is ${numbers[3]}`;
console.log(numb);


/* ----for access object value by use template string-- */
const student = {name: 'john cena', age: 18};
const st = `the student john cena age  is ${student.age}`;
console.log(st);





