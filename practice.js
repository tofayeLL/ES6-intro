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
const friends = (names) => {
    let evenNames = [];
    for (let name of names) {
        if (name.length % 2 === 0) {
            evenNames.push(name);

        }
    }
    return evenNames;
}

const names = ['akash', 'batash', 'sagor', 'nodii', 'pani', 'prithibi', 'chad', 'tara', 'surgo'];
const evenNames = friends(names);
console.log(evenNames);