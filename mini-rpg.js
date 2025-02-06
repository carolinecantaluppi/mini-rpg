// Creare un videogioco testuale che preveda:
// Creazione del personaggio (nome scelto dall’utente, vita = 100, attacco e difesa)
let giocatore = {
    nome: prompt("Inserisci il tuo nome: "),
    vita: 100,
    attacco: Math.floor(Math.random() * 9) + 1,
    difesa: Math.floor(Math.random() * 9) + 1,
    cura: 3,
    fuga: 0
}

// Selezione randomica di mostri (nome, vita, attacco e difesa)
let mostri = [
    { nome: "Slime", vita: Math.floor(Math.random() * 99) + 1, attacco:  Math.floor(Math.random() * 9) + 1,  difesa: Math.floor(Math.random() * 9) + 1 },
    { nome: "Malakit il Dio Caduto", vita: Math.floor(Math.random() * 99) + 1, attacco:  Math.floor(Math.random() * 9) + 1,  difesa: Math.floor(Math.random() * 9) + 1 },
    { nome: "Slime2", vita: Math.floor(Math.random() * 99) + 1, attacco:  Math.floor(Math.random() * 9) + 1,  difesa: Math.floor(Math.random() * 9) + 1 }
]


// Gestire il turno del giocatore (può compiere 3 opzioni: attaccare, curarsi e tentare la fuga)
// Altre specifiche:
// Il giocatore può curarsi solo 3 volte
// La cura, l’attacco e la difesa sono valori random tra due estremi
// Le probabilità di fuga calano in base al tipo di mostro (es. 90% con uno slime, 5% con Malakit il Dio Caduto)

let mostro = Math.floor(Math.random() * mostri.length);

function turnoGiocatore() {
    let azioni = prompt("Scegli una delle seguenti opzioni: attaccare, curarsi o fuggire"); 
    // while (giocatore.vita > 0 && mostro.vita > 0) {
        if (azioni === "attaccare") {
            let danno = Math.floor(Math.random() * giocatore.attacco + 5);
            mostri[mostro].vita = mostri[mostro].vita - danno;
            console.log("Hai attaccato il mostro! Vita rimanente del mostro: " + mostri[mostro].vita);
        } else if (azioni === "curarsi") {
            giocatore.vita = giocatore.vita + Math.floor(Math.random() * 10 + 5);
            giocatore.vita--;
            console.log("Ti hai curato! Vita aumentata a: " + giocatore.vita);
        } else if (azioni === "fuggire") {
            console.log("Sei riuscito a fuggire.");
        } else {
            console.log("Non valido. Scrivi una opzione valida.");
        }
    // }
    fineGioco();
}
        
// Gestire il turno del mostro (attacco automatico)
function turnoMostro() {
    console.log("Il mostro ti ha attaccato. Questo è la tua vita rimanente: " + giocatore.vita);
    giocatore.vita = giocatore.vita - attaccoMostro;
    console.log("Il tuo giocatore ha attualmente " + giocatore.vita + "di vita.");
}

// Gestire la fine del gioco (sconfitta, vittoria o fuga)
function fineGioco() {
    if (giocatore.vita <= 0) {
        console.log("Game Over.");
    }
    if (mostro.vita <= 0) {
        console.log("Hai vinto! Hai sconfitto il mostro.");
    }
    if (giocatore.fuga === 1) {
        console.log("Hai fuggito! Hai evitato il mostro.");
    }
}

turnoGiocatore();