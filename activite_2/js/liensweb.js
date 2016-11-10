    /* 
    Activité 2
    */

//génère les bloques formaté pour chaque lien
function makeBlocLien(lien) {
    //définitions des variables
    var liElt = document.createElement("li"),// Création d'un élément li     
        aElt = document.createElement("a"),//creation du lien
        br = document.createElement("br"),//retour ligne
        spanElt = document.createElement("span");

    //formatage
    //element de la liste sont déjà formaté dans le css .lien
    //element du span déjà formaté dans le css 
    //lien
    aElt.style.textDecoration = "none";
    aElt.style.fontWeight = "bold";
    aElt.style.color = "#428bca";

    //implémentation des varaibles
    //lien
    aElt.textContent = lien.titre;
    aElt.href = lien.url;
    //span
    spanElt.appendChild(document.createTextNode(lien.url));
    spanElt.appendChild(br);
    spanElt.appendChild(document.createTextNode("Ajouté par "));
    spanElt.appendChild(document.createTextNode(lien.auteur));
    //élèment de la liste
    liElt.setAttribute("class", "lien");
    liElt.appendChild(aElt);
    liElt.appendChild(document.createTextNode(" "));
    liElt.appendChild(spanElt);

    return liElt;
}

//Génère et formate les liens initiaux
function formatListeLiens(listeLiens) {
    // Création de la liste
    //la liste n'est pas obligatoire mais structure plus rendu
    var ulElt = document.createElement("ul");
    ulElt.setAttribute("id", "listUrl");
    //formatage list
    ulElt.style.listStyleType = "none";
    //génération des liens
    listeLiens.forEach(function (lien) {
        var liElt = makeBlocLien(lien);
      // Insertion du nouvel élément
        ulElt.appendChild(liElt);
    });
    return ulElt;
}

//ajout d'un bloc lien en première position
function addlienFirstPlace(lien) {
    var liElt = makeBlocLien(lien),
        ulElt = document.getElementById("listUrl");
    ulElt.insertBefore(liElt, ulElt.firstChild);

}

//prépare les noeuds pour la partie formulaire et affichage des liens
function intitFormDiv() {
    var divEltMess = document.createElement("div"),
        divEltLst = document.createElement("div");
    divEltMess.setAttribute("id", "messageDiv");
    document.getElementById("contenu").appendChild(divEltMess);
    divEltLst.setAttribute("id", "listeLiens");
    document.getElementById("contenu").appendChild(divEltLst);
}

//gestion du formatage et action des élèments du formulaire
function makeFormateInput(elt) {
    //intial
    elt.style.borderColor = "intial";
    elt.style.borderWidth =  "1px";
    elt.style.borderStyle = "inset";
    elt.style.borderColor = "grey";
    elt.style.borderImage = "intial";
    elt.style.margin = "3px";
    //on focus
    elt.addEventListener("focus", function () {
        elt.style.borderWidth =  "2px";
        elt.style.borderColor = "blue";

    });
    //on blur
    elt.addEventListener("blur", function () {
        elt.style.borderColor = "intial";
        elt.style.borderWidth =  "1px";
        elt.style.borderStyle = "inset";
        elt.style.borderColor = "grey";
        elt.style.borderImage = "intial";
        elt.setAttribute("value", elt.value);
    });
    return elt;
}

//création des champs text
function makeTextInput(id, pHolder) {
    var spanElt = document.createElement("span"),
        inputElt = document.createElement("input");
    spanElt.setAttribute("id", id + "Span");
    inputElt.type = "text";
    inputElt.placeholder = pHolder;
    inputElt.value = "";
    inputElt.setAttribute("id", id);
    inputElt = makeFormateInput(inputElt);
    spanElt.appendChild(inputElt);
    return spanElt;
}

//supprime la bulle d'aide si le champ est valide
function deleteTip(elt, value) {
    elt.style.borderWidth = "1px";
    elt.style.borderColor = "green";
    elt.setAttribute("title", value);
    var spanElt = document.getElementById(elt.getAttribute("id") + "Span");
    spanElt.removeAttribute('data-tip');
}

//crée la bulle d'aide si le champ est valide
function makeTip(elt, value) {
    elt.style.borderWidth = "3px";
    elt.style.borderColor = "red";
    elt.setAttribute("title", value);
    var spanElt = document.getElementById(elt.getAttribute("id") + "Span");
    spanElt.setAttribute("data-tip", value);
}


//vérifier que le champ ne soit pas vide
function checkField(elt) {
    var eltValue = elt.getAttribute("value");
    //refusé si l'élément est null, vide, ou que des espaces
    if (eltValue  === null || eltValue === "" || (/^\s+$/.test(eltValue))) {
        makeTip(elt, "Veuillez compléter le champ");
        return false;
    } else {
        deleteTip(elt);
        return true;
    }
}

//vérification des champs du formulaires
function checkFields() {
    var author = document.getElementById("inputAuthor"),
        autorBoolean = checkField(author),
        title = document.getElementById("inputTitle"),
        titleBoolean = checkField(title),
        url = document.getElementById("inputUrl"),
        urlBoolean = checkField(url),
        urlValue = url.value,
        patterns = /^((http|https):\/\/)/;
    if (urlBoolean) {
        if (!patterns.test(urlValue)) {
            url.setAttribute("value", "http://" + urlValue);
        }
    }
    if (urlBoolean && titleBoolean && autorBoolean) {
        return true;
    } else {
        return false;
    }
}

//creation du bouton ajout
function makeAddButton() {
    var divElt  = document.createElement("div"),
        buttonEl = document.createElement("input");
    divElt.setAttribute("id", "addButonDiv");
    buttonEl.type = "button";
    buttonEl.value = "Ajouter un lien";
    buttonEl.setAttribute("id", "buttonAddForm");
    //lorsque l'on clique sur ajouter, on affiche le formlaire
    buttonEl.onclick = function (e) {
        e.stopPropagation();
        makeForm();
    };
    divElt.appendChild(buttonEl);
    document.getElementById("contenu").replaceChild(divElt, document.getElementById("messageDiv"));
}

//AFFICHAGE DU MESSAGE DE VALIDATION DE L'AJOUT
function showMessage() {
    var divElt = document.createElement("div"),
        spanElt = document.createElement("span");
    divElt.setAttribute("id", "messageDiv");
    spanElt.textContent = 'Ajout du lien "' + document.getElementById("inputTitle").getAttribute("value") + '"';
    //formatage
    spanElt.style.backgroundColor = "#d4ebff";
    spanElt.style.color = "#428bca";
    spanElt.style.padding = "10px";
    spanElt.style.margin = "20px";
    spanElt.style.fontSize = "200%";
    //ajout
    divElt.appendChild(spanElt);
    document.getElementById("contenu").replaceChild(divElt, document.getElementById("formDiv"));
    //délai de 2s pour l'affichage
    setTimeout(function () {makeAddButton(); }, 2000);
}


//création du formulaire
function makeForm() {
    var divElt = document.createElement("div"),
        //création des texts Input
        authorInputElt = makeTextInput("inputAuthor", "Entrez votre nom"),
        titleInputElt = makeTextInput("inputTitle", "le titre du lien"),
        urlInputElt = makeTextInput("inputUrl", "Entrez le lien"),
        // creation du bouton
        buttonElt = document.createElement("input");
    divElt.setAttribute("id", "formDiv");
    divElt.style.display = "inline-block";
    
    buttonElt.type = "submit";
    buttonElt.value = "Ajouter";
    buttonElt.setAttribute("id", "buttonAddLink");
    buttonElt.onclick = function (e) {
        if (checkFields()) {
            e.stopPropagation();
            var newTitle = document.getElementById("inputTitle").getAttribute("value"),
                newURL = document.getElementById("inputUrl").getAttribute("value"),
                newAuthor = document.getElementById("inputAuthor").getAttribute("value"),
                lien = {
                    titre: newTitle,
                    url: newURL,
                    auteur: newAuthor
                };
            showMessage();
            addlienFirstPlace(lien);
        }
    };
    divElt.appendChild(authorInputElt);
    divElt.appendChild(titleInputElt);
    divElt.appendChild(urlInputElt);
    divElt.appendChild(buttonElt);
    document.getElementById("contenu").replaceChild(divElt, document.getElementById("addButonDiv"));
}

    // Liste des liens Web à afficher. Un lien est défini par :
    // - son titre
    // - son URL
    // - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];


//initialisation des divisions
intitFormDiv();
//creation du bouton d'ajout
makeAddButton();
//insertion de la liste intiale avec une seule modification de la page
var ulElt = formatListeLiens(listeLiens);
document.getElementById("listeLiens").appendChild(ulElt);

