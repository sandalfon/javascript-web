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

// TODO : compléter ce fichier pour ajouter les liens à la page web

var indice = 0

listeLiens.forEach(function (lien)
{
    var liensElts = document.createElement("div");
        liensElts.className = "lien";
    
    var aElts = document.createElement("a");
        aElts.href = lien.url;
        aElts.appendChild(document.createTextNode(lien.titre + " "));
    
    var span2Elts = document.createElement("span");
        span2Elts.appendChild(document.createTextNode(lien.url));
    
    var span3Elts = document.createElement("span");
        span3Elts.appendChild(document.createTextNode("Ajouté par " + lien.auteur));
        aElts.style.color = "#428bca" ;
        aElts.style.fontWeight = "bold"
        aElts.style.textDecoration = "none";
        aElts.style.fontSize = "150%";
        liensElts.style.display = "block";
        span3Elts.style.display = "block";
        document.getElementById("contenu").appendChild(liensElts);
        document.getElementsByClassName("lien")[indice].appendChild(aElts);    
        document.getElementsByClassName("lien")[indice].appendChild(span2Elts);
        document.getElementsByClassName("lien")[indice].appendChild(span3Elts);
    
    indice++
});