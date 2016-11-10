var h = document.head;
console.log(h);

var b = document.body;
console.log(b);

if (document.body.nodeType === document.ELEMENT_NODE ) {
    console.log("Body est un noeud élément");
} else {
    console.log("Body est un oeud textuel");
}

// Accès au premier enfant du noeud body
console.log(document.body.childNodes[0]);

console.log(document.body.childNodes[1]);

// Affiche les noeuds enfant du noeud body
for (var i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}

var h1 = document.body.childNodes[1];
console.log(h1.parentNode); // Affiche le noeud body

console.log(document.parentNode); // Affiche null : document n'a aucun noeud parent