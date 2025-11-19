import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Produit {
  nom: string;
  stock: number;
}

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './produits.html',
  styleUrl: './produits.css',
})
export class Produits {
  // Liste des produits avec leur niveau de stock
  produits: Produit[] = [
    { nom: 'Ordinateur Portable', stock: 75 },
    { nom: 'Souris Sans Fil', stock: 35 },
    { nom: 'Clavier Mécanique', stock: 12 },
    { nom: 'Moniteur 24"', stock: 55 },
    { nom: 'Webcam HD', stock: 8 },
    { nom: 'Casque Audio', stock: 42 }
  ];
  
  // Propriété pour ajouter un nouveau produit
  nouveauProduit: Produit = { nom: '', stock: 0 };
  
  // Méthode pour obtenir la couleur en fonction du stock
  getStockColor(stock: number): string {
    if (stock > 50) {
      return 'green';
    } else if (stock >= 20 && stock <= 50) {
      return 'orange';
    } else {
      return 'red';
    }
  }
  
  // Méthode pour obtenir l'icône en fonction du stock
  getStockIcon(stock: number): string {
    if (stock > 50) {
      return '✅'; // Vert - Bon stock
    } else if (stock >= 20 && stock <= 50) {
      return '⚠️'; // Orange - Stock moyen
    } else {
      return '❌'; // Rouge - Stock faible
    }
  }
  
  // Méthode pour ajouter un produit
  addProduit() {
    if (this.nouveauProduit.nom && this.nouveauProduit.stock >= 0) {
      this.produits.push({
        nom: this.nouveauProduit.nom,
        stock: this.nouveauProduit.stock
      });
      this.nouveauProduit = { nom: '', stock: 0 };
    }
  }
  
  // Méthode pour modifier le stock
  updateStock(produit: Produit, increment: number) {
    produit.stock = Math.max(0, produit.stock + increment);
  }
  
  // Méthode pour obtenir les produits par niveau de stock
  getProduitsByStock(level: 'high' | 'medium' | 'low'): Produit[] {
    switch (level) {
      case 'high':
        return this.produits.filter(p => p.stock > 50);
      case 'medium':
        return this.produits.filter(p => p.stock >= 20 && p.stock <= 50);
      case 'low':
        return this.produits.filter(p => p.stock < 20);
      default:
        return [];
    }
  }
}
