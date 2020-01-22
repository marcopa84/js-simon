

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati


var arrayRandom =[];
var arrayNumeroInput = [];
var punteggio = 0;
var arrayNumeriIndovinati = [];

$(document).ready(
  function (){
    // popolo la array con 5 numeri casuali
    while (arrayRandom.length < 5) {
      var numeroEstratto = getRandomIntInclusive (1,100);
      if (arrayRandom.includes(numeroEstratto) == false) {
        arrayRandom.push(numeroEstratto);
      }
    }
    console.log(arrayRandom);
    // Un alert espone 5 numeri casuali.
    alert('i numeri estratti sono: ' + arrayRandom[0] + ' ' + arrayRandom[1] + ' ' + arrayRandom[2] + ' ' + arrayRandom[3] + ' ' + arrayRandom[4]);

    // Da li parte un timer di 30 secondi.
    // Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
    // var clock = // DEBUG:
    setTimeout(getInputNumber, 8000);
    console.log(arrayNumeroInput);
    // clearTimeout(clock); // DEBUG:
    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati




  }
);

// for (var i = 0; i < arrayRandom.length; i++) {
//   if (arrayRandom[i] == arrayNumeroInput[i]) {
//     punteggio++;
//     console.log(punteggio);
//   }else {
//     console.log('non trovato');
//   }



// Funzione generazione numero random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//funzione inserimento 5 numeri
function getInputNumber() {
  while (arrayNumeroInput.length < 5) {
    var numeroInput = parseInt(prompt('Inserisci un numero da 1 a 100: '));
    if (arrayNumeroInput.includes(numeroInput) == false) {
      arrayNumeroInput.push(numeroInput);
    }
  }
  for (var i = 0; i < arrayRandom.length; i++) {
    if (arrayRandom[i] == arrayNumeroInput[i]) {
      punteggio++;
      arrayNumeriIndovinati.push(arrayNumeroInput[i]);
    }
  }
  console.log('hai totaliazzato: ',punteggio);
  console.log('i numeri che hai indovinato sono: ',arrayNumeriIndovinati);
};
