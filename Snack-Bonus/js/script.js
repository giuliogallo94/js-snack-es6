const numbersArray = [];
let newNumbersArray = [];

//Creazione array di numeri random
for (let i = 0; i < 20; i++) {
    let number = numbersArray[i];
    let rndNmb = Math.round(Math.random()*100 + 1);
    number = rndNmb;
 console.log(number);
 numbersArray.push(number);
}

console.log(numbersArray);


createNewArray(numbersArray, 20, 80);
console.log(newNumbersArray);

/**
 * FUNZIONE PER CREARE NUOVO ARRAY CON SOLI NUMERI COMPRESI TRA LE DUE VARIABILI
 * @param {Array, number,number}
 * @returns {Array}
 */
function createNewArray(array, a, b) {
    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        if (number > a && number < b) {
            newNumbersArray.push(number);
        }
        }
}