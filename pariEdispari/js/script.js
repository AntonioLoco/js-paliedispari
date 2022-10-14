// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const userChoice = prompt("Scegli pari o dispari");
const userNumber = parseInt(prompt("Inserisci un numerio da 1 a 5"));

console.log(userChoice, ":Scelta pari o dispari");
console.log(userNumber, ":Scelta del numero");

const computerNumber = randomNumber(1,6);
console.log(computerNumber, ":Numero del compuyer");


const somma = userNumber + computerNumber;
console.log(somma, ":somma");

let pariOdispari = pariOrDispari(somma);
console.log(pariOdispari);

if(pariOdispari === userChoice){
    alert("Congratulazioni! Hai vinto");
} else {
    alert("Il computer ha vinto, riprova");
}


// FUNZIONI
/**
 * Description: Funzione che genera un numero random compreso tra 2 valori
 * @param {number} min valore minimo che possiamo generare
 * @param {number} max  valore massimo che possiamo generare
 * @returns {number} ritorna il numero random generato
 */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


/**
 * Description: funzione che ci dice se il numero passato è pari o dispari
 * @param {number} number il valore da controllare
 * @returns {string} ritorna con una stringa se è pari o dispari 
 */
function pariOrDispari(number) {
    if(number % 2 === 0){
        return "pari";
    } else {
        return "dispari";
    }
}