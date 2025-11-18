// 1) Déclarations de variables avec différents types primitifs
let nom: string = "Alice";
let age: number = 21;
let estInscrit: boolean = true;
let note: number | null = null;
let tags: string[] = ["typescript", "tp1"];
let valeur: any = { cle: "valeur" };

// 2) Fonction typée qui calcule la somme de deux nombres
function somme(a: number, b: number): number {
    return a + b;
}

// 3) Interface Etudiant
interface Etudiant {
    id: number;
    nom: string;
    prenom: string;
    age: number;
}

// 4) Classe Etudiant qui implémente l'interface et ajoute une méthode pour afficher les infos
class EtudiantImpl implements Etudiant {
    constructor(
        public id: number,
        public nom: string,
        public prenom: string,
        public age: number
    ) {}

    afficherInfos(): void {
        console.log(`Etudiant ${this.id} : ${this.nom} ${this.prenom}, âge ${this.age}`);
    }
}

// Exemples d'utilisation
const etu1 = new EtudiantImpl(1, "Doe", "John", 20);
const etu2: Etudiant = { id: 2, nom: "Dupont", prenom: "Marie", age: 22 };

etu1.afficherInfos();
console.log("Etudiant 2 :", etu2);
console.log("Nom:", nom, "Age:", age, "Inscrit:", estInscrit);
console.log("Tags:", tags.join(", "));
console.log("Somme 2 + 3 =", somme(2, 3));

// Fin du fichier
