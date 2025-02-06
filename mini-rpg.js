// Altre specifiche:
// Il giocatore può curarsi solo 3 volte
// La cura, l’attacco e la difesa sono valori random tra due estremi
// Le probabilità di fuga calano in base al tipo di mostro (es. 90% con uno slime, 5% con Malakit il Dio Caduto)

// Oltre al giochino dovrai:
// Gestire il versionamento del codice con l’uso di Git e mantenere una cronologia delle modifiche pulita e con messaggi di commit chiari
// Salvare la tua repository locale su una repo pubblica su GitHub affinché possa vederla e valutarla
// Eh sì, qui scatta un voto da 1 a 10. Il voto terrà conto di:
// Qualità del codice
// Organizzazione
// Qualità della cronologia Git 


// Creare un videogioco testuale che preveda:
// Creazione del personaggio (nome scelto dall’utente, vita = 100, attacco e difesa)
let giocatore = {
    nome: prompt("Inserisci il tuo nome: "),
    vita: 100,
    attacco: Math.floor(Math.random() * 20) + 10,
    difesa: Math.floor(Math.random() * 20) + 10,
    cura: 3,
    fuga: 0
}

// Selezione randomica di mostri (nome, vita, attacco e difesa)
let mostro = {
    nome: "",
    vita: 0,
    attacco: 0,
    difesa: 0
}


// Gestire il turno del giocatore (può compiere 3 opzioni: attaccare, curarsi e tentare la fuga)
function turnoGiocatore() {
    let scelta = prompt("Scegli una delle seguenti opzioni: attaccare, curarsi o fuga \n"); 
    if (scelta === "attaccare") {
        attacco();
    } else if (scelta === "curarsi") {
        cura();
    } else if (scelta === "fuga") {
        fuga();
    } else {
        console.log("Non valido. Scrivi una opzione valida.");
    }
}
        
// Gestire il turno del mostro (attacco automatico)
function turnoMostro() {
    let attaccoMostro = Math.floor(Math.random() * mostro.attacco) + mostro;
    console.log("Il mostro attacca per " + attaccoMostro + " punti");
    giocatore.vita = giocatore.vita - attaccoMostro;
    console.log("Il tuo giocatore ha attualmente " + giocatore.vita + "di vita.");
}

// Gestire la fine del gioco (sconfitta, vittoria o fuga)
function fineGioco() {
    if (giocatore.vita <= 0) {
        console.log("Game Over. Purtroppo, hai perso. Il mostro ti ha sconfitto.");
    }
    if (mostro.vita <= 0) {
        console.log("Hai vinto! Hai sconfitto il mostro.");
    }
    if (giocatore.fuga === 1) {
        console.log("Hai fuggito! Hai evitato il mostro.");
    }
}
