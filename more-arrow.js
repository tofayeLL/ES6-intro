
const difference = (x, y) => x - y;
const multiply = (num1, num2, num3) => num1 * num2 * num3;


// parameter with parenthesis
const getAge = (person) => person.age;
const student = { name: 'rakib', age: 20 };
const age = getAge(student);
console.log(age);


// parameter with no parenthesis
const getThird = numbers => numbers[3];
const numbers = [12, 3, 5, 7, 8, 9];
const third = getThird(numbers);
console.log(third);


/* -----no parameter ---- */
const getPI = () => Math.PI;
console.log(getPI());


/* ----large arrow function----- if you want to get anything from the function then you have to use return keyword-----*/
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const multiply = x * y * z;
    const result = sum + multiply;
    return result;
}


