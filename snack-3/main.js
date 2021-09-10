// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

// array di partenza
const array1 = [1,2,3,4,5,6,7,8,9,10];

// chiedo i numeri di partenza e di arrivo
let nA = parseInt(prompt('numero di partenza') - 1);
let nB = parseInt(prompt('numero di arrivo') - 1); 

// uso un ciclo filter per analizzare gli elementi
const newArray = array1.filter((element, i) => {
    // se l'elemento è compreso tra i due numeri ritorna vero
    if (i >= nA && i <= nB){
        return true
    }
    return false // se non è compreso torna falso
});

console.log(array1);
console.log(newArray);