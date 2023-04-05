// ARRAY

let numero = 2;
//let array = [ 3, 2 , 4];
let array = [ true, 2 , "ultimo elemento"];

// non è lo stesso di:
let array0 = 1;
let array1 = 2;
let array2 = 4;

console.log(array[numero - 1]);
console.log(array[0]); // primo elemento
console.log("lenght " + array.length);
console.log(array[array.length - 1]); // l'ultimo elemento

// CICLI

const numeri = [0 , 1 ,2, "gas", 4 , 55];

// soldatino // ricerca lineare // canarino
let canarino = true;

for (let i = 0; i < numeri.length && canarino; i = i + 1) {
    // BLOCK 
    const element = numeri[i];
    console.log(element);
    if(element == "gas"){
        canarino = false;
    }
}

// WHILE

let salePasta = 0;
while(salePasta <= 0.08){
    //aggiungi sale
    salePasta += 0.01;
}

console.log(salePasta)
// salepasta è 0.09 (non 0.08)!! Wow
