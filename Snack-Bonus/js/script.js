const numbersArray = [];
let newNumbersArray = [];

createRndNumbersArray(numbersArray, 20)
console.log(numbersArray);
createNewArray(numbersArray, 20, 80);
console.log(newNumbersArray);


//********* FUNZIONI *********//


/**
 * FUNZIONE PER CREARE ARRAY DI NUMERI RANDOM
 */

function createRndNumbersArray(array, a) {
    for (let i = 0; i < a; i++) {
        let number = array[i];
        let rndNmb = Math.round(Math.random()*100 + 1);
        number = rndNmb;
     console.log(number);
     array.push(number);
    }}

/**
 * FUNZIONE PER CREARE NUOVO ARRAY CON SOLI NUMERI COMPRESI TRA LE DUE VARIABILI
 * @param {Array, number,number}
 * @returns {Array}
 */

function createNewArray(array, a, b) {
   array.forEach(number,index => {
    if (number > a && number < b) {
        newNumbersArray.push(number);
    }
   });
}



