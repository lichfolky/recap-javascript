
/*
    let listaLi = document.querySelectorAll("li");
    console.log(listaLi);
*/

let elementoMattia = document.getElementById("mattia");

elementoMattia.innerText = "MattiaAAAAAAA";
elementoMattia.innerHTML = "<p>Mattia1</p>";
elementoMattia.innerHTML = elementoMattia.innerHTML + "<p>Mattia2</p>”";

for (let i = 0; i < 5; i++) {
    let elementoLi = document.createElement("li");
    elementoLi.id = "elemento" + i;
    elementoLi.classList.add("ciao");
    elementoLi.style.color = "brown";
    elementoLi.innerText = "ciaociao" + i;
    elementoLi.nome= "mattia";
    // elementoLi.setAttribute("nome", "Tullio");
    // https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

    elementoMattia.appendChild(elementoLi);
}