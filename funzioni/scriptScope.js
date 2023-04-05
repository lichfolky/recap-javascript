function saluta() {
    console.log("ciao");
}

function somma(a, b) {
    // let variabileGlobale = 'NO GLOBAL';
    let variabileGlobale = 'SECONDO';
    console.log("2: " + variabileGlobale)
    return a + b;
}

let variabileGlobale = "PRIMO";
if (1 == 1) {
    let varabileLocaleDentroIF = 8;
    console.log("benvenuto dentro l'if " + variabileGlobale);
}

// Questo fa errore Uncaught ReferenceError: varabileLocaleDentroIF is not defined
//console.log("fuori if" + varabileLocaleDentroIF);

let i = 0;
for (; i < 5; i++) {
    let dentro;
    console.log(i);
}

console.log(`vali 5? ${i}`);

// qui non entro
for (; i < 5; i++) {
    console.log(i);
}
