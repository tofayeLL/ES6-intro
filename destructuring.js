
const actor = {
    name: 'ananta',
    age: 35,
    phone: '01795345432',
    money: 12897987
}

/* const phone = actor.phone;
const age = actor.age;
const name = actor.name;
console.log(phone); */

// by use destructuring 
/* const {name, age} = actor;
console.log(name, age); */

// to change variable name 
const {name, age: boyosh} = actor;
console.log(boyosh);

/* ----for array----- */
const numbers = [10, 25];
// by use destructuring
const [first, second] = numbers;
// or,
const [x, y] = numbers;


// advanced destructuring
function doubleThem(a, b){
    return [a*2, b*2];
}

const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);

