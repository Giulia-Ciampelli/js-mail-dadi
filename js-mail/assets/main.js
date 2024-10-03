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
}

if (users.includes(request) == false) {
    alert('Non sei nella lista');
}


// OPPURE: tornare al metodo .includes()
// if (users.includes(request)) {
//     alert('Sei nella lista');
// }
// else {
//     alert('Non sei nella lista');
// }