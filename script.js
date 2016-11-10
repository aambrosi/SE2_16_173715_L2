/**
    Nome:       Ambrosi Andrea 
    Matricola:  173715
    Data:       10/11/2016
    Software Engineer - Esercizio seconda esercitazione laboratorio
*/

/**
 * @brief Inizializzo itemList e valueList con alcuni esempi.La variabile tableLength e' la lunghezza (in orizzontale) della tabella che mi servira' quando dovro' aggiungere nuovi elementi. RADIX e' la base per quando uso il parseInt.
 */
var itemList = ["Mele", "Pere", "Prugne"];
var valueList = [5, 10, 4];
var tableLength = 3;
var RADIX = 10;

/**
 * @brief   Quando carico la pagina aggiungo subito alcuni elementi al magazzino come esempio per l'utente.
 * @param [in] Nessun parametro d'ingresso.
 * @return Nessun parametro di ritorno.
 */
var load = function () {
    "use strict";
    var items = document.getElementById("itemRow"),
        values = document.getElementById("valueRow"),
        i = 0;
    
    for (i = 0; i < tableLength; i = i + 1) {
        //per ogni elemento creo una nuova colonna e aggiungo relativi dati
        items.insertCell(i).innerHTML = itemList[i];
        values.insertCell(i).innerHTML = valueList[i];
    }
};

/**
 * @brief Utilizzzo questa funzione per scoprire il div che contiene i campi per inserire un nuovo ordine (dato che all'inizio è nascosto). La funzione viene attivata dal click sul bottone "Nuovo Ordine".
 * @param [in] Nessun parametro d'ingresso.
 * @return Nessun parametro di ritorno.
 */
var discover = function () {
    "use strict";
    var orderDiv = document.getElementById('orderDiv');
    if (orderDiv.style.display !== 'block' || orderDiv.style.display !== '') {
        orderDiv.style.display = 'block';
    }
};

/**
 * @brief Funzione per controllare la presenza di un item all'interno del magazzino.
 * @param [in] newElement: String - elemento di cui controllare la presenza.
 * @return Ritorna -1 se l'item non è presente e l'indice nella lista se invece l'item e' presente.
 */
var controllaPresenza = function (newElement) {
    "use strict";
    var trovato = false,
        index = -1,
        i = 0;

    for (i = 0; i < itemList.length && !trovato; i = i + 1) {
        if (itemList[i] === newElement) {
            trovato = true;
            index = i;
        }
    }
    return index;
};

/**
 * @brief Questa funzione mi serve per aggiungere il nuovo elemento alla lista gia' presente e per aggiornare la pagina index.html dell'avvenimento. Se invece voglio aggiungere item uguali a quelli che ho già in magazzino aggiorno solamente il contatore associato.
 * @param [in] Nessun parametro d'ingresso.
 * @return Nessun parametro di ritorno.
 */
var addElement = function () {
    "use strict";
    var items = document.getElementById("itemRow"),
        values = document.getElementById("valueRow"),
        item = document.getElementById("item").value,
        value = parseInt(document.getElementById("amount").value, RADIX),
        //il valore di ctrl mi indichera' se l'item e' o meno presente nel magazzino
        ctrl = controllaPresenza(item),
        //mi restituisce un "array di celle"
        c = values.cells;
    //controllo che l'utente non abbia lasciato vuoto il campo dell'item
    if (item !== ""){
        //mi assicuro che inserisca un valore accettabile
        if (value >= 0) {
            if (ctrl === -1) {
                //aggiungo una nuova colonna per il nuovo elemento e vi scrivo dentro nome e valore
                items.insertCell(tableLength).innerHTML = item;
                values.insertCell(tableLength).innerHTML = value;
                //aggiungo il nuovo elemento anche nel magazzino
                itemList.push(item);
                valueList.push(value);
                //aggiorno la lunghezza della tabella
                tableLength += 1;
            } else {
                //prodotto gia' presente, aggiorno il magazzino ed anche la tabella
                valueList[ctrl] += value;
                c[ctrl].innerHTML = valueList[ctrl];
            }
        } else {
            alert("Quantità non valida!");
        }
    } else {
        alert("Inserisci il nome del prodotto!");
    }
};