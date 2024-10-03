console.log('im alive too');

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

// alert per segnare che il gioco dei dadi è iniziato
alert('Giochiamo ai dadi!');

// creazione variabili
let human;
let pc;

// uso del metodo Math.floor e Math.random per rendere numeri interi
human = Math.floor(Math.random() * 6) + 1;
pc = Math.floor(Math.random() * 6) + 1;
console.log(human, pc);

if (human > pc) {
    alert('Hai vinto!');
    console.log('Hai vinto!');
}
else if (human < pc) {
    alert('Hai perso!');
    console.log('Hai perso!');
}
else {
    alert('Pareggio!');
    console.log('Pareggio!');
}