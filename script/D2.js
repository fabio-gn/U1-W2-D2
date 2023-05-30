/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 2;
let num2 = 3;

if (num1 > num2){
  console.log("num1 is bigger");
}
else if (num1 === num2){
  console.log("the numbers are equal");
}
else{
  console.log("num1 is smaller");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3 = 4;
if (!num3 === 5){
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let divByFiveNum = 25;
if (divByFiveNum % 5 === 0){
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numberOne = 2;
let numberTwo = 6;
if (numberOne === 8 || numberTwo === 8){
  console.log("uno dei due numeri è 8");
}
else if (numberOne + numberTwo === 8) {
  console.log("la somma dei numeri è uguale a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let totalShoppingCart = 60;
// let spedizioneGratuita = totalShoppingCart > 50 ? true : false;
// let isBlackFriday = true;
// const spedizione = 10;
// let price;
// if (spedizioneGratuita){
//   price = totalShoppingCart;
//   console.log("la spedizione è gratuita! Pagherai euro ", totalShoppingCart);
// } else{
//   price = totalShoppingCart + spedizione;
//   console.log("il totale è ", price);
// }


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 60;

let isBlackFriday = true;
const spedizione = 10;
let price;
//verifica che sia il black Friday e nel caso assegna lo sconto alla spesa totale
if (isBlackFriday){
  totalShoppingCart -= totalShoppingCart * 0.2;
}
let spedizioneGratuita = totalShoppingCart > 50 ? true : false;
//verifica che la spedizione sia gratuita
if (spedizioneGratuita){
  price = totalShoppingCart;
  console.log("la spedizione è gratuita! Pagherai euro ", totalShoppingCart);
} else{
  price = totalShoppingCart + spedizione;
  console.log("il totale è ", price);
}



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 45;
let numero2 = 44;
let numero3 = 43;
const myArray = [];
if (numero1 > numero2 && numero1 > numero3){
  myArray.push(numero1);
  if(numero2 > numero3){
    myArray.push(numero2, numero3);
  } else {
    myArray.push(numero3, numero2);
  }
} else if(numero2 > numero3){
  myArray.push(numero2, numero3, numero1);
} else{
  myArray.push(numero3, numero2, numero1);
}
console.log(myArray);
  

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let isNumber = 2;
if (typeof isNumber === "number"){
  console.log("hai inserito un numero");
} else {
  console.log("non hai inserito un numero");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let evenOrOdd = "40";
if (evenOrOdd % 2 === 0){
  console.log("number is even");
} else{
  console.log("number is odd");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val >= 10){
  console.log("Uguale a 10 o maggiore");
} else if (val < 5){
  console.log("meno di 5");
}else{
  console.log("Meno di 10");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = 'Toronto';
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me.lastName);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me.skills);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let ourArray = [];

ourArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(ourArray);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
ourArray.splice(9, 1, 100);
console.log(ourArray);
