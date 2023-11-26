// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata


// la funzione del primo esercizio si risolve cliccando il titolo della pagina
function changeTitle() {
    let siteTitle = document.getElementById("site-title");
    siteTitle.innerText = "Ciao Ragazzi!";
}

function changeBackground() {
    document.body.style.background = "darkgrey";
}

function changeAdress() {
    let siteAdress = document.getElementsByClassName("bottom-adress");
    siteAdress[0].innerText = "Via delle Vie, 999, roma";
}

function addClassLink() {
    let allProd = document.getElementsByClassName("item-link");
    for (let i = 0; i < allProd.length; i++) {
        allProd[i].classList.add("added-class");       
    }
}

function hideImages() {
    let prodImages = document.querySelectorAll("img.card-image");
    for (let i = 0; i < prodImages.length; i++) {
       prodImages[i].classList.toggle("hidden-image"); 
    }
}

function randomColor() {
    let varCol = "Rgb(" + (Math.floor(Math.random() * 256)) + ", " + (Math.floor(Math.random() * 256)) + ", " + (Math.floor(Math.random() * 256)) + ")";
    return varCol;
}

function priceColor() {
    let allPrices = document.getElementsByClassName("price-tag");
    for (let i = 0; i < allPrices.length; i++) {
        allPrices[i].style.color = randomColor();        
    }
}

/* Alternativo
 */
/* function priceColor() {
    let allPrices = document.getElementsByClassName("price-tag");
    priceColor = randomColor();
    for (let i = 0; i < allPrices.length; i++) {
        allPrices[i].style.color = priceColor;        
    }
} */

