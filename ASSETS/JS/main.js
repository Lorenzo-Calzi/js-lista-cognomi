//1. chiedi all’utente il cognome
var lastName = prompt('Inserisci il tuo cognome')
console.log(lastName);

var list = ["Rossi", "Ferrari", "Russo", "Fontana"];
console.log('La lista originale è: ' + list);

//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
list.push(lastName);

var newList = list;
console.log('La nuova lista è: ' + newList);

//3. stampa la lista ordinata alfabeticamente


//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova