// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// ---------------------------------- //

// 1) array con le squadre
let finale =[];
let listaSquadre = [
    {
        "nome": "Squadra-A",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Squadra-B",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Squadra-C",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
];

// funzione per generare numeri casuali
function randomLimitNumber(min, max){
    min = parseInt(min);
    max = parseInt(max);
    return Math.floor(Math.random() * (max - min) + min);
};

// 2) genero numeri casuali per ogni squadra (punti e falli) e li pusho
for (let i=0; i<listaSquadre.length; i++){
    // richiamo la funzione e genero punti e falli
    let punti = randomLimitNumber(0, 20);
    let falli = randomLimitNumber(0, 10);
    
    // pusho la squadra compilata
    listaSquadre[i] = {
        "nome": listaSquadre[i].nome,
        "puntiFatti": punti,
        "falliSubiti": falli
    };

    // destutturo
    let {nome, falliSubiti} = listaSquadre[i];
    
    // pusho in array
    finale[i] = {
        "nome": nome,
        "falliSubiti": falliSubiti
    }
};

// 3) stampo in console
console.log(listaSquadre);
console.log(finale);
