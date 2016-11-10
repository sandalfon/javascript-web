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

for (var i = 0; i < listeLiens.length; i++) {					// pour chaque entrée de listeLiens :
	var contenu = document.getElementById("contenu");		// création de quelques variables beaucoup utilisées par la suite,
	var spanElt = document.createElement("span");				// pour faciliter l'écriture et la relecture : récupération du "contenu"
	var paraElt = document.createElement("p");					// et création des éléments "span" et "p" (span étant dans le CSS).
	paraElt.classList.add("lien");											// Ajout de la classe "lien" au paragraphe, pour réutiliser là aussi les propriétés CSS,
	contenu.appendChild(paraElt);												// et ajout de ce paragraphe au document HTML.

	var texteUrl = listeLiens[i].url;										// Récupération du texte de chaque url de listeLiens.
	var urlElt = document.createElement("a");						// Création d'un élément "a",
	urlElt.textContent = listeLiens[i].titre;						// avec comme texte le titre de l'entrée de listeLiens
	urlElt.href = texteUrl;															// et comme url son champ "url".

	urlElt.style.color = "#428bca";											// Application de son style (couleur,
	urlElt.style.fontSize = "110%";											// taille du texte,
	urlElt.style.textDecoration = "none";								// absence de soulignement du lien,
	urlElt.style.fontWeight = "bold";										// et caractères gras).

	var auteur = listeLiens[i].auteur;									// Récupération du champ "auteur".

	var tagPara = document.getElementsByTagName("p")[i];										// Récupération du paragraphe à l'indice "i" (le 1er, puis 2e, et 3e.),
	tagPara.appendChild(urlElt);																						// auquel on ajoute l'élément "urlElt".
	spanElt.appendChild(document.createTextNode(" " + texteUrl));						// Puis "spanElt" récupère successivement le texte de l'url,
	spanElt.appendChild(document.createElement("br"));											// un saut de ligne
	spanElt.appendChild(document.createTextNode("Ajouté par " + auteur));		// et l'auteur.
	tagPara.appendChild(spanElt);																						// Enfin "spanElt" est ajouté au "tagPara".
};
