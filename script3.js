// UN po' di manipolazione DOM
/*
    let listaLi = document.querySelectorAll("li");
    console.log(listaLi);
*/

let elementoMattia = document.getElementById("mattia");

elementoMattia.innerText = "MattiaAAAAAAA";
elementoMattia.innerHTML = "<p>Mattia1</p>";
// append = appendo alla fine, aggiungo al fondo
elementoMattia.innerHTML = elementoMattia.innerHTML + "<p>Mattia2</p>”";
elementoMattia.innerHTML += "<p>Mattia2</p>”";


/*
metto dentro elementoMattia 5 elementi nuovi li uno appeso al dopo l'altro
forse era meglio mettere dentro  document.querySelectorAll("ul");
*/
for (let i = 0; i < 5; i++) {
    let elementoLi = document.createElement("li");
    elementoLi.id = "elemento" + i;
    elementoLi.classList.add("ciao");
    elementoLi.style.color = "brown";
    elementoLi.innerText = "ciaociao" + i;
    elementoLi.nome= "Mattia";
    
    // elementoLi.setAttribute("nome", "Tullio");
    // QUESTO è molto potente (check la parte CSS): https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

    elementoMattia.appendChild(elementoLi);
}


