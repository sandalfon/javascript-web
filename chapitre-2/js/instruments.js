function infoLiens(){
var ps = document.getElementsByTagName("a");
console.log(ps.length);
console.log(ps[0].getAttribute("href"));
console.log(ps[ps.length-1].getAttribute("href"));
}
infoLiens()


function possede(id,classe){
     var instrument = document.getElementById(id);
    if (instrument !== null) {
        console.log(instrument.classList.contains(classe));
    } else {
        console.log("Aucun élément ne possède l'identifiant " + id);
    }
}

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur