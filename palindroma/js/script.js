// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

// Chiediamo all'utente di inserire una parola
const userWord = prompt("Inserisci una parola");
console.log(userWord);

// Richiamo la funzione per chiedere se è un palindromo e lo stampo
alert(isPalindroma(userWord));





// FUNCTION
/**
 * Description: funzione che ci ritorna se la parola è palidroma o no
 * @param {string} word è la parola da analizzare
 * @returns {boolean} è il valore di ritorno, se true è palindroma, se false non lo è
 */
function isPalindroma(word){
    let palindromo = false;
    let firstPart = word.substring(0,word.length / 2);
    let secondPart = word.substring(firstPart.length, word.length);

    console.log(firstPart, secondPart);

    for(let i = 0; i < firstPart.length; i++){
        if(firstPart.charAt(i) === secondPart.charAt(secondPart.length - 1 - i)){
            palindromo = true;
        } else {
            palindromo = false;
            break;
        }
        
        console.log(firstPart.charAt(i),secondPart.charAt(secondPart.length - 1 - i), palindromo);
    }

    return palindromo;
}