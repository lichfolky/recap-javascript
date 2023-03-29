let variabile;
const costante = "ciao";

variabile = 5;
variabile = 8;
variabile = 3 + 3;

console.log(costante + "!!!");

//variabile = variabile + 1;
//variabile +=  1;
variabile++;

console.log(variabile);

//** FINE VARIABILI **/

//let numero = parseInt("40");
let numero = +"40";
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
let melePossedute = 0;
let moneteDoro = 5;

let risposta = prompt("vuoi una mela rossa per 3 monete d'oro?");

if(risposta == "si"){
    console.log("ecco la mela");
    melePossedute++;
    moneteDoro -= 3;
}else{
    // se la risposta è diversa da si
    console.log("non hai risposto si")

    if(risposta == "no"){
        console.log("peccato");
    }else{
        console.log("non ho capito");
    }
}

let medicoDiTorno = true;

if(melePossedute > 0){
    console.log("melePossedute")
     medicoDiTorno = false;
    console.log("medicoDiTorno1", medicoDiTorno)
}

console.log("medicoDiTorno2",medicoDiTorno)


console.log("monete d'oro", moneteDoro , "melePossedute",melePossedute)