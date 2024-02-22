/* -------practice problem 1----- */
// number 1
// const multiply = (x, y, z) => x * y * z;
// const result = multiply(2, 3, 4);
// console.log(result);

// number 2
// const sentence = 'I am a web developer. I love to code. I love to eat biriyani';
// const convert = `I am a web developer.
// I love to code.
// I love to eat biriyani.`;
// console.log(convert);

// number 3
// const add = (x, y = 2) => x + y;
// const result = add(4);
// console.log(result);


/* ------------------------------------------------------------ */


/* --------practice problem 2---------- */
// print even friends name in a new array use array function//
// const friends = (names) => {
//     let evenNames = [];
//     for (let name of names) {
//         if (name.length % 2 === 0) {
//             evenNames.push(name);

//         }
//     }
//     return evenNames;
// }

// const names = ['akash', 'batash', 'sagor', 'nodii', 'pani', 'prithibi', 'chad', 'tara', 'surgo'];
// const evenNames = friends(names);
// console.log(evenNames);




/* ----------------------------------------------------------- */



/* ------practice problem 3-------- */
// average of numbers in the array
// const averageNumbers = (numbers) => {
//     let sum = 0;
//     let squareNum = [];
//     for (let num of numbers) {
//         let square = Math.pow(num, 2);
//         sum = sum + square;
//         squareNum.push(square);   
//     }
//     // console.log(squareNum);
//     // console.log(sum)
//     const length = squareNum.length;
//     const average = sum / length;
//     return average;
    
// }

// const avg = averageNumbers([2, 3, 4, 5, 6]);
// console.log(avg);




/* -------------------------------------------------------- */


/* ---------practice problem 4--------- */

const getMax = (array1, array2) => {
    // merge two array in one array by use spread operator
    const mergeArr = [...array1, ...array2];
    // console.log(mergeArr);
    // find from array max number
    const maxNum = Math.max(...mergeArr);
    return maxNum

}

const maxNum = getMax([2, 5, 6 ,35, 98, 3, 225], [5, 87, 24, 9, 1, 90, 45]);
console.log('Get the maximum number from the two array is', maxNum);