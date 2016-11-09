/*
    Nome:       Ambrosi Andrea 
    Matricola:  173715
    Data:       11/11/2016
    Software Engineer - Esercizio seconda esercitazione laboratorio
*/

var itemList = ["Banane", "Pere", "Mele"];
var valueList = [5, 4, 6];

/*
    Quando carico la pagina aggiungo subito gli elementi
    che ho gia' in magazzino
*/
var load = function () {
    var items = document.getElementById("itemRow"),
        values = document.getElementById("valueRow"),
        i = 0;

    for (i = itemList.length; i > 0; i = i - 1) {
        items.insertCell(0).innerHTML = itemList[i - 1];
        values.insertCell(0).innerHTML = valueList[i - 1];
    }
};

/*
    utilizzzo questa funzione per aggiungere il div che contiene i campi per inserire un nuovo ordine
    la funzione viene attivata dal click sul bottone "orderButtonIndex"
*/
var discover = function () {
    var orderDiv = document.getElementById('orderDiv');
    if (orderDiv.style.display !== 'block' || orderDiv.style.display !== '') {
        orderDiv.style.display = 'block';
    }
};

/*
    Funzione per controllare la presenza di un item all'interno del magazzino.
    Parametri d'ingresso: var newElement (elemento di cui controllare la presenza).
    Ritorna -1 se l'item non è presente e l'indice nel vettore se invece e' presente.
*/
var controllaPresenza = function (newElement) {
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

/*
    Questa funzione mi serve per aggiungere il nuovo elemento alla lista
    gia' presente e per aggiornare la pagina index.html dell'avvenimento
*/
var addElement = function () {
    var items = document.getElementById("itemRow"),
        values = document.getElementById("valueRow"),
        item = document.getElementById("item").value,
        value = parseInt(document.getElementById("quantita").value),
        ctrl = controllaPresenza(item),
        x = items.insertCell(0),
        y = values.insertCell(0),
        c = values.cells;
    
    if (ctrl === -1) {
        x.innerHTML = item;
        itemList.push(item);
        
        y.innerHTML = value;
        valueList.push(value);
    } else {
        valueList[ctrl] += value;
        
        c[ctrl].innerHTML = valueList[ctrl];
    }
};