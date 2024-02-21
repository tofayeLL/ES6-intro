
/* ----default--> if value is not provided , take this as a default value */
function add(num1=5, num2=3, num3){
    const result = num1 + num2 + num3;
    console.log(num1,num2,result);
    return result;
}

// add(2, 4);
// add(2);
add();



/* ----string----default value  empty string*/

function fullName(fisrt, last=''){
    const full = fisrt + ' ' + last;
    return full;
}


/* -----for array ----default value empty array  */

function friends (numbs = []){

}


/* -----for object ----default value empty object */
function person(human = {}){
    
}