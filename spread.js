

const max = Math.max(10, 3, 5, 7, 92, 4, 19, 27);
// console.log(max);

/* const numbers = [10, 3, 5, 7, 92, 4, 19, 27];
console.log(Math.max(...numbers));
 */
// or,
const numbers = [10, 3, 5, 7, 92, 4, 19, 27];
const arrayMax = Math.max(...numbers);
console.log(arrayMax);



/* ------use spread operator to copy---- */
/* const friends = [10, 23, 15, 24, 16, 28, 90, 3];
const bondhu = friends;
bondhu.push(55, 75, 65);
console.log(friends);
console.log(bondhu); */



// push use spread operator

const friends = [10, 23, 15, 24, 16, 28, 90, 3];
const bondhu = friends;
const dosto = [...friends];
friends.push(100);
console.log(dosto);
console.log(friends);

// advanced add element in array by use spread operator
const sonkha = [...friends, 100,101];
console.log(sonkha);

