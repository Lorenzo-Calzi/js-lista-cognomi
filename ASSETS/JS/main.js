//1. chiedi all’utente il cognome
var lastName = prompt('Inserisci il tuo cognome')
console.log(lastName);

var list = ["Rossi", "Ferrari", "Gallo", "Bianchi"];
console.log('La lista originale è: ' + list);

//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
list.push(lastName);

var newList = list;
console.log('La nuova lista è: ' + newList);

//3. stampa la lista ordinata alfabeticamente
newList.sort();
console.log('La lista ordinata è: ' + newList);

//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
for(var i = 0; i < newList.length; i++) {
    var results = console.log((i + 1) + ' - ' + newList[i]);
}

