
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

let listinoBici = [
    {
        "nome": "bici_A",
        "peso": 8
    },
    {
        "nome": "bici_B",
        "peso": 10
    },
    {
        "nome": "bici_C",
        "peso": 5
    },
    {
        "nome": "bici_D",
        "peso": 6
    },
];

let biciLeggera = listinoBici[0];

for (let i=0; i<listinoBici.length; i++){

    if(listinoBici[i].peso < biciLeggera.peso){
        biciLeggera = listinoBici[i];
    };
};

var {nome, peso} = biciLeggera;

// console.log(`la bici più leggera del listino è ${biciLeggera.nome} e pesa ${biciLeggera.peso}Kg`)
console.log(`la bici più leggera del listino è ${nome} e pesa ${peso}Kg`)
