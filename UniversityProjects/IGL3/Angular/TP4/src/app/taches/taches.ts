import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tache {
  description: string;
  priorite: 'haute' | 'moyenne' | 'basse';
  statut: boolean; // true = terminée, false = en cours
}

@Component({
  selector: 'app-taches',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './taches.html',
  styleUrl: './taches.css',
})
export class Taches {
  // Liste des tâches
  taches: Tache[] = [
    { description: 'Terminer le TP4 Angular', priorite: 'haute', statut: false },
    { description: 'Réviser les directives', priorite: 'haute', statut: true },
    { description: 'Lire la documentation', priorite: 'moyenne', statut: false },
    { description: 'Créer un projet personnel', priorite: 'basse', statut: false },
    { description: 'Pratiquer TypeScript', priorite: 'moyenne', statut: true }
  ];
  
  // Nouvelle tâche
  nouvelleTache: Tache = {
    description: '',
    priorite: 'moyenne',
    statut: false
  };
  
  // Filtres
  filtreStatut: 'tous' | 'en cours' | 'terminées' = 'tous';
  filtrePriorite: 'toutes' | 'haute' | 'moyenne' | 'basse' = 'toutes';
  
  // Ajouter une tâche
  addTache() {
    if (this.nouvelleTache.description.trim()) {
      this.taches.push({
        description: this.nouvelleTache.description,
        priorite: this.nouvelleTache.priorite,
        statut: false
      });
      this.nouvelleTache.description = '';
      this.nouvelleTache.priorite = 'moyenne';
    }
  }
  
  // Basculer le statut d'une tâche
  toggleTache(tache: Tache) {
    tache.statut = !tache.statut;
  }
  
  // Supprimer une tâche
  deleteTache(index: number) {
    this.taches.splice(index, 1);
  }
  
  // Obtenir la couleur selon la priorité
  getPriorityColor(priorite: string): string {
    switch (priorite) {
      case 'haute':
        return '#e74c3c';
      case 'moyenne':
        return '#f39c12';
      case 'basse':
        return '#27ae60';
      default:
        return '#95a5a6';
    }
  }
  
  // Obtenir la largeur de la barre selon la priorité
  getPriorityWidth(priorite: string): string {
    switch (priorite) {
      case 'haute':
        return '100%';
      case 'moyenne':
        return '60%';
      case 'basse':
        return '30%';
      default:
        return '0%';
    }
  }
  
  // Obtenir les tâches filtrées
  getTachesFiltrees(): Tache[] {
    let tachesFiltrees = this.taches;
    
    // Filtre par statut
    if (this.filtreStatut === 'en cours') {
      tachesFiltrees = tachesFiltrees.filter(t => !t.statut);
    } else if (this.filtreStatut === 'terminées') {
      tachesFiltrees = tachesFiltrees.filter(t => t.statut);
    }
    
    // Filtre par priorité
    if (this.filtrePriorite !== 'toutes') {
      tachesFiltrees = tachesFiltrees.filter(t => t.priorite === this.filtrePriorite);
    }
    
    return tachesFiltrees;
  }
  
  // Statistiques
  getTotalTaches(): number {
    return this.taches.length;
  }
  
  getTachesCompletes(): number {
    return this.taches.filter(t => t.statut).length;
  }
  
  getTachesEnCours(): number {
    return this.taches.filter(t => !t.statut).length;
  }
  
  getProgressPercentage(): number {
    if (this.taches.length === 0) return 0;
    return Math.round((this.getTachesCompletes() / this.getTotalTaches()) * 100);
  }
}
