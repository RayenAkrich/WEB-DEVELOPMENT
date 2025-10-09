const livre = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    annee: 1943,
    getInfo() {
        return `le titre: ${this.titre}, auteur: ${this.auteur}, année: ${this.annee}`;
    }
};
console.log(livre.getInfo());