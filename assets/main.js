console.log('im alive');

// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

// creazione array (lista di chi può accedere)* e prompt per inserire la mail
let request = prompt('Inserisci la tua e-mail');
const users = [
    'sunnyday123@example.com',
    'bluebird.music@mail.com',
    'techguy88@domain.com',
    'foodie.adventure@service.org',
    'wanderlust.2024@mail.net',
    'booklover99@example.co',
    'artfanatic@email.com',
    'gamerpro2023@site.com',
    'naturephotographer@web.com',
    'coffeeenthusiast@domain.org'
];

// assegnazione di un metodo ad una nuova variabile
let userRequest = request.length;

// creazione di un loop per cercare in tutto l'array e verificare se l'user sia nella lista
for (let i = 0; i < userRequest; i++) {
    if (request == users[i]) {
        alert('Sei nella lista');
    }
    continue
}

if (users.indexOf() == -1) {
    alert('Non sei nella lista');
}

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