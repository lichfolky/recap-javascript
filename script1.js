// VARIABILI

let variabile;
const costante = "ciao";

variabile = 5;
variabile = 8;
variabile = 3 + 3;

console.log(costante + variabile + "!!!");

// Queste 3 versioni sono equivalenti:
//variabile = variabile + 1;
//variabile +=  1;
variabile++;

console.log(variabile);

// STRINGHE E NUMERI

// Con questo stampo 4010:
//let numero = "40";

let numero = parseInt("40");

//let numero = +"40";
// qui uso l'alternativa Number, un altro modo per trasformare in numero una stringa
// cercate in questa documentazione dove lo dice:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

numero += 10;

console.log(numero);

// IF

variabile = 3;
if(variabile != 3){
// blocco
    console.log("inizio blocco if")
    console.log(`wow la variabile, che vale ${variabile}, è diversa da 3`)
    variabile ++;
    console.log(`ora vale ${variabile}`)
    console.log("fine blocco if")
}
console.log("resto del programma")

// ELSE IF

let melePossedute = 0;
let moneteOro = 5;

let risposta = prompt("vuoi una mela rossa per 3 monete d'oro?");
if(risposta == "si"){
    console.log("ecco la mela");
    melePossedute++;
    moneteOro -= 3;
}else{
    // se la risposta è diversa da si
    console.log("non hai risposto si")

    if(risposta == "no"){
        console.log("peccato");
    }else{
        console.log("non ho capito");
    }
}


/*
if(risposta == "si"){
    console.log("ecco la mela");
    melePossedute++;
    moneteOro -= 3;
}else if(risposta == "no"){
    console.log("peccato");
}else{
    console.log("non ho capito");
}
*/

// SCOPE IF

// Cosa succede se non prendo la mela alla variabile medicoDiTorno?
// cosa succede invece se la dichiaro dentro l'if?
let medicoDiTorno;
//let medicoDiTorno = true;

if(melePossedute > 0){
    console.log("melePossedute")
    medicoDiTorno = false;
    console.log("medicoDiTorno1", medicoDiTorno)
}

console.log("medicoDiTorno2",medicoDiTorno)
console.log("monete d'oro", moneteDoro , "melePossedute",melePossedute)