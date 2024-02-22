
const numbers = [1, 6, 8, 4];
/* for(let i = 0; i < numbers.length ; i++){
    console.log(numbers[i]);
} -----eta amra temon use korbo na */

/* while loop----etaw temon use korbo na */



/* -------------------------------------------------------------- */

/* ----beshirvag time a use kora hobe for of--- */
for(const number of numbers){
    // console.log(number);
}


/* -----for of ---loop amra string er opor o chalaite pari--- */
const nobab = 'siraj ud dowla';
for(const char of nobab){
    // console.log(char);
}



/* -------------------------------------------------------------- */


/* -------object er khetre ---(for in) ---use korte hobe (for of )--use korle hobe na */

const glass = {
    name:'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}
for(const key in glass){
    const value = glass[key];
    // console.log(key, value);
}


/* -------------------------------------------------------------- */



// object er modhe for of use kora jay ektu ghuraiya seta hosse
const keys = Object.keys(glass);
console.log(keys);
for(const key of keys){
    const value = glass[key];
    console.log(key, value);
}

