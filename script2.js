// ARRAY

let numero = 2;
let array = [ true, 2 , "ultimo elemento"];

// non è lo stesso di:
let array0 = 1;
let array1 = 2;
let array2 = 4;

/*
console.log(array[numero - 1]);


console.log(array[0]);


console.log("lenght " + array.length);


console.log(array[array.length - 1]);
*/

const numeri = [0 , 1 ,2, "gas", 4 , 55];


// soldatino variabile // ricerca lineare
let canarino = true;

for (let i = 0; i < numeri.length && canarino; i = i + 1) {
    // BLOCK 
    const element = numeri[i];
    console.log(element);
    if(element == "gas"){
        canarino = false;
    }
}

let salePasta = 0;
while(salePasta <= 0.08){
    //aggiungi sale
    salePasta += 0.01;
}

console.log(salePasta)
// salepasta è 0.09!! Wow
