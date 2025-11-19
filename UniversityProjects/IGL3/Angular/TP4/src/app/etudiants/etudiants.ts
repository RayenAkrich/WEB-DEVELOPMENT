import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Student {
  name: string;
  level: string;
  email?: string;
  phone?: string;
  address?: string;
}

@Component({
  selector: 'app-etudiants',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './etudiants.html',
  styleUrl: './etudiants.css',
})
export class Etudiants {
  // Liste des étudiants
  etuds: Student[] = [
    { 
      name: 'Alice Dupont', 
      level: 'L3',
      email: 'alice.dupont@university.fr',
      phone: '06 12 34 56 78',
      address: '12 rue de la Paix, Paris'
    },
    { 
      name: 'Bob Martin', 
      level: 'M1',
      email: 'bob.martin@university.fr',
      phone: '06 98 76 54 32',
      address: '45 avenue Victor Hugo, Lyon'
    },
    { 
      name: 'Charlie Bernard', 
      level: 'L2',
      email: 'charlie.bernard@university.fr',
      phone: '07 11 22 33 44',
      address: '8 boulevard Saint-Michel, Marseille'
    },
    { 
      name: 'Diana Petit', 
      level: 'M2',
      email: 'diana.petit@university.fr',
      phone: '06 55 66 77 88',
      address: '23 rue Gambetta, Toulouse'
    },
    { 
      name: 'Emma Laurent', 
      level: 'L1',
      email: 'emma.laurent@university.fr',
      phone: '07 99 88 77 66',
      address: '67 cours Lafayette, Nice'
    }
  ];
  
  // Étudiant sélectionné (vue détail)
  selectedEtudiant: Student | null = null;
  
  // Nouvel étudiant
  nouvelEtudiant: Student = {
    name: '',
    level: 'L1',
    email: '',
    phone: '',
    address: ''
  };
  
  // Filtre par niveau
  filtreNiveau: string = 'tous';
  
  // Niveaux disponibles
  niveaux: string[] = ['L1', 'L2', 'L3', 'M1', 'M2'];
  
  // Sélectionner un étudiant
  onSelect(etudiant: Student) {
    this.selectedEtudiant = etudiant;
  }
  
  // Ajouter un étudiant
  addEtudiant() {
    if (this.nouvelEtudiant.name && this.nouvelEtudiant.level) {
      this.etuds.push({
        name: this.nouvelEtudiant.name,
        level: this.nouvelEtudiant.level,
        email: this.nouvelEtudiant.email,
        phone: this.nouvelEtudiant.phone,
        address: this.nouvelEtudiant.address
      });
      // Réinitialiser le formulaire
      this.nouvelEtudiant = {
        name: '',
        level: 'L1',
        email: '',
        phone: '',
        address: ''
      };
    }
  }
  
  // Obtenir les initiales pour l'avatar
  getInitials(name: string): string {
    const parts = name.split(' ');
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }
  
  // Obtenir la couleur selon le niveau
  getLevelColor(level: string): string {
    switch (level) {
      case 'L1':
        return '#3498db';
      case 'L2':
        return '#2ecc71';
      case 'L3':
        return '#f39c12';
      case 'M1':
        return '#e74c3c';
      case 'M2':
        return '#9b59b6';
      default:
        return '#95a5a6';
    }
  }
  
  // Obtenir les étudiants filtrés
  getEtudiantsFiltres(): Student[] {
    if (this.filtreNiveau === 'tous') {
      return this.etuds;
    }
    return this.etuds.filter(e => e.level === this.filtreNiveau);
  }
}
