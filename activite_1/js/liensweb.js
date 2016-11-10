/* 
Activité 1
*/

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


// Création de la liste
//la liste n'est pas obligatoire mais structure plus rendu
var ulElt = document.createElement("ul");
ulElt.setAttribute("id", "listUrl");
//formatage list
ulElt.style.listStyleType = "none";


//génération des liens
listeLiens.forEach(function (lien) {

    //définitions des variables
    var liElt = document.createElement("li");// Création d'un élément li     
    var aElt = document.createElement("a");//creation du lien
    var br = document.createElement("br");//retour ligne
    var spanElt = document.createElement("span");
   
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
    
    // Insertion du nouvel élément
    ulElt.appendChild(liElt);
});

//insertion de la liste avec une seule modification de la page
document.getElementById("contenu").appendChild(ulElt);

