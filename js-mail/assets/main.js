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

// // creazione di una variabile con un metodo che controlli se il prompt contiene una stringa dell'array
// let check = users.includes(request);
// console.log(check);

// // creazione di if statement per mostrare all'utente se si è nella lista
// if (check == true) {
//     alert('Sei nella lista');
// }
// else {
//     alert('Non sei nella lista');
// }

// BONUS: ricreazione del programma con loop
let userRequest = request.length;
let isOnlist;

// creazione di un loop per cercare in tutto l'array e verificare se l'user sia nella lista
for (let i = 0; i < userRequest; i++) {
    if (request == users[i]) {
        isOnlist = true;
        continue
    }
}

if (isOnlist) {
    alert('Sei nella lista');
}
else {
    alert('Non sei nella lista');
}