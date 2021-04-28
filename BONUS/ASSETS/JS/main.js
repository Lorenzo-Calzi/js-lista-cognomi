//1. chiedi all’utente il cognome
var lastName = prompt('Inserisci il tuo cognome')
document.getElementById('last_name').innerHTML = lastName;

var list = ["Rossi", "Ferrari", "Gallo", "Bianchi"];
document.getElementById('original_list').innerHTML = list;
//2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
list.push(lastName);

var newList = list;
document.getElementById('new_list').innerHTML = newList;

//3. stampa la lista ordinata alfabeticamente
newList.sort();
document.getElementById('ordinated_list').innerHTML = newList;

//4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
for(var i = 0; i < newList.length; i++) {
    var results = console.log((i + 1) + ' - ' + newList[i]);
    /* document.writeln(results); */
}
