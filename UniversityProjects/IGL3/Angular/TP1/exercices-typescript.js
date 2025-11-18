"use strict";
// Version compilée (ES5-like) générée hand-made pour exécution Node
var EtudiantImpl = /** @class */ (function () {
    function EtudiantImpl(id, nom, prenom, age) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    EtudiantImpl.prototype.afficherInfos = function () {
        console.log("Etudiant " + this.id + " : " + this.nom + " " + this.prenom + ", âge " + this.age);
    };
    return EtudiantImpl;
}());
// 1) Déclarations de variables
var nom = "Alice";
var age = 21;
var estInscrit = true;
var note = null;
var tags = ["typescript", "tp1"];
var valeur = { cle: "valeur" };
// 2) Fonction somme
function somme(a, b) {
    return a + b;
}
// 3) Exemple d'utilisation
var etu1 = new EtudiantImpl(1, "Doe", "John", 20);
var etu2 = { id: 2, nom: "Dupont", prenom: "Marie", age: 22 };
etu1.afficherInfos();
console.log("Etudiant 2 :", etu2);
console.log("Nom:", nom, "Age:", age, "Inscrit:", estInscrit);
console.log("Tags:", tags.join(", "));
console.log("Somme 2 + 3 =", somme(2, 3));
