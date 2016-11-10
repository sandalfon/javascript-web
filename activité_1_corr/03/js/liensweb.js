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

//on crée un nouvel élement <ul>
var listeElt = document.createElement("ul");
listeElt.id = "liens";
//on supprime le padding
listeElt.style.padding = "0";

//on parcourt le tableau des liens et...
listeLiens.forEach(function(lien){
    //... pour chaque lien on crée un élement <li>
    var currLien = document.createElement("li");
    currLien.className = "lien";
    //on supprime la puce de liste
    currLien.style.listStyle = "none";

    //...on crée un lien pointant vers l'url
    var aLien = document.createElement("a");
    aLien.href = lien.url;
    //on modifie le style
    aLien.style.textDecoration = "none";
    aLien.style.color = "inherit";

    //...on ajoute le titre pour le lien
    var aLienTitre = document.createElement("h2");
    aLienTitre.textContent = lien.titre;
    //on modifie le style
    aLienTitre.style.display = "inline-block";
    aLienTitre.style.color = "#428bca";
    aLienTitre.style.margin = "0 5px 0 0";

    //...puis l'adresse du lien
    var aLienUrl = document.createElement("span");
    aLienUrl.textContent = lien.url;
    //on applique un font-size à 100%
    aLienUrl.style.fontSize = "100%";
    
    //...on crée un paragraphe pour insérer le nom de l'ajout du lien
    var lienAuteur = document.createElement("p");
    lienAuteur.className = "auteur";
    lienAuteur.textContent = "Ajouté par "+lien.auteur;
    //on supprime le margin
    lienAuteur.style.margin = "0";

    //...on imbrique les différents éléments
    aLien.appendChild(aLienTitre);
    aLien.appendChild(aLienUrl);
    currLien.appendChild(aLien);
    currLien.appendChild(lienAuteur);

    //...qu'on insère dans le html     
    document.getElementById("contenu").appendChild(listeElt);
    document.getElementById("liens").appendChild(currLien);
});