

const glass = {
    name:'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
}
console.log(glass);




/* ----------------------------------------------------------------- */



/* --------keys------- */
const keys = Object.keys(glass);
console.log(keys);
//output ----- [ 'name', 'color', 'price', 'isCleaned' ]





/* ----------------------------------------------------------------- */


/* ---Values----- */
const values = Object.values(glass);
console.log(values);
//output----- [ 'glass', 'golden', 12, true ]  





/* ----------------------------------------------------------------- */



/* ------entries----eta joray joray key and value ke output hisebe show korbe array er vitore array hisebe--- */

const entries = Object.entries(glass);
console.log(entries);




/* ----------------------------------------------------------------- */



/*output--------etake array of array or two dimentional array o bola hoy---because ekta array er modhe arekta array or prottekta upadan array--
 [
    [ 'name', 'glass' ],
    [ 'color', 'golden' ],
    [ 'price', 12 ],
    [ 'isCleaned', true ]
  ] */




  /* ----------------------------------------------------------------- */



  /* --------delete---- 2 ta way te kora jay  */
  /* ------1st normal way-- */
//   delete glass.isCleaned;
//   console.log(glass);
// output---  { name: 'glass', color: 'golden', price: 12 }

/* ----2nd way --- by use destructuring */
// const {isCleaned, ...others} = glass;
// console.log(others);
//output---- { name: 'glass', color: 'golden', price: 12 }




/* ----------------------------------------------------------------- */



/* ---------freeze--------freeze use korle ey object a ar kono kisu kora possible na ..new valu add, upodate value, delete value eigula possible na jmn ase omn e thakbe... */
// Object.freeze(glass);
// glass.source = 'Bangladesh';
// glass.price = 5000;
// delete glass.name;
// console.log(glass);
//output--- { name: 'glass', color: 'golden', price: 12, isCleaned: true }





/* ----------------------------------------------------------------- */





/* ------seal----eta use korle value add kore jabe na , delete o kora jabe na but  value update ba change korte parbo-- */
Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass);
//output-------- { name: 'glass', color: 'golden', price: 5000, isCleaned: true }





/* ----------------------------------------------------------------- */