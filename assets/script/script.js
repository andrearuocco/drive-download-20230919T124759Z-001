document.getElementById("showInputBtn").addEventListener("click", function () {
    var input = document.getElementById("myInput");
    if (input.classList.contains("hidden")) {
        input.classList.remove("hidden");
    } else {
        input.classList.add("hidden");
    }
});

/*sarebbe stato opportuno creare una funzione e passare a questa ogni volta il carousel identificato con il rispettivo id in modo da non ripete più volte il codice*/
let items = document.querySelectorAll('#recipeCarousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 6

    let next = el.nextElementSibling

    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


let ite = document.querySelectorAll('#reciCarousel .carousel-item')

ite.forEach((el) => {
    const minPerSlide = 6

    let next = el.nextElementSibling

    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            next = ite[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


let item = document.querySelectorAll('#recipCarousel .carousel-item')

item.forEach((el) => {
    const minPerSlide = 6

    let next = el.nextElementSibling

    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            next = item[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let movie = document.querySelectorAll('#movies .carousel-item')

movie.forEach((el) => {
    const minPerSlide = 6  //non modifica il funzionamento delle classi di bootstrap che gestiscono correttamente il responsive ma crea un errore "paused in debugger" SE SI RICARICA LA FINESTRA e sono in uso gli strumenti responsive di chrome, tuttavia non ha a che vedere con il responsive: il ridimensionamento della finestra senza gli strumenti di chrome viene perfettamente gestito

    let next = el.nextElementSibling

    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            next = movie[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let serie = document.querySelectorAll('#tvSeries .carousel-item')

serie.forEach((el) => {
    const minPerSlide = 6

    let next = el.nextElementSibling

    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            next = serie[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

let youngB = document.querySelectorAll('#youngBfuc .carousel-item')

youngB.forEach((el) => {
    const minPerSlide = 6

    let next = el.nextElementSibling

    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            next = youngB[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

/**/
