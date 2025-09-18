class Etudiant {
    constructor(nom, note) {
        this.nom = nom;
        this.note = note;
    }
    getMention() {
        if (this.note >= 16) return "Très bien";
        if (this.note >= 14) return "Bien";
        if (this.note >= 10) return "Passable";
        return "Échec";
    }
}
const e1 = new Etudiant("Ahmed", 17);
const e2 = new Etudiant("Rayen", 13);
const e3 = new Etudiant("Mohamed", 8);
console.log(e1.nom, e1.getMention());
console.log(e2.nom, e2.getMention());
console.log(e3.nom, e3.getMention());