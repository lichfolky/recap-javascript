/// FUNZIONI

function creaPanino() {
    let wrapperEl = document.querySelector(".wrapper");

    // wrapperElement.innerHTML += `<div class="panino">
    //     <div class="pane top"></div>
    //     <div class="insalata"></div>
    //     <div class="pomodoro"></div>
    //     <div class="formaggio"></div>
    //     <div class="carne"></div>
    //     <div class="pane bottom"></div>
    // </div>
    // `;

    let paninoEl = document.createElement("div");
    paninoEl.classList.add("panino");

    let paneElt = document.createElement("div");
    paneElt.classList.add("pane", "top");

    let paneElb = document.createElement("div");
    paneElb.classList.add("pane");

    let insalataEl = document.createElement("div");
    insalataEl.classList.add("insalata");

    let carneEl = document.createElement("div");
    carneEl.classList.add("carne", "bottom");

    // carneEl.addEventListener("click", () => carneEl.remove());
    carneEl.addEventListener("click", function () {
        //console.dir(this);
        carneEl.remove();
    });

    insalataEl.addEventListener("click", function () {
        //console.dir(this);
        insalataEl.remove();
    });

    paneElt.addEventListener("click", function () {
        //console.dir(this);
        paneElt.classList.remove("top");
    });

    /*   paninoEl.addEventListener("mouseover", function (event) {
           console.log("panino");
           console.dir(event.target);
           console.log(event.target);
       })
       */

    paninoEl.append(paneElt);
    paninoEl.append(insalataEl);
    paninoEl.append(carneEl);
    paninoEl.append(paneElb);
    wrapperEl.append(paninoEl);
}

function creaPanini(numero) {
    /*
    wrapperEl = document.querySelector(".wrapper");
    wrapperEl.innerHTML = "";
    */
    for (let i = 0; i < numero; i++) {
        creaPanino();
    }
}


// Inzio programma

//let numpaniniEl = document.getElementById("numpanini");

document.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        // let numPanini = parseInt(numpaniniEl.value);
        creaPanini(1);
    }
})

