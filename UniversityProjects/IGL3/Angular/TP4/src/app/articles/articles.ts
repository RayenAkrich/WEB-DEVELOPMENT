import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Article {
  titre: string;
  contenu: string;
  importance: 'élevée' | 'moyenne' | 'faible';
}

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
  // Propriété qui contient la liste des articles
  articles: Article[] = [
    { titre: 'LapTop Asus', contenu: 'Contenu de l\'article 1', importance: 'élevée' },
    { titre: 'Laptop Gaming', contenu: 'Contenu de l\'article 2', importance: 'moyenne' },
    { titre: 'Laptop HP', contenu: 'Contenu de l\'article 3', importance: 'faible' }
  ];
  
  // Propriétés pour capturer les valeurs des nouveaux articles
  newTitle = '';
  newContent = '';
  newImportance: 'élevée' | 'moyenne' | 'faible' = 'moyenne';
  
  // Méthode pour ajouter un nouvel article
  addArticle() {
    if (this.newTitle && this.newContent) {
      this.articles.push({
        titre: this.newTitle,
        contenu: this.newContent,
        importance: this.newImportance
      });
      // Réinitialisation des champs
      this.newTitle = '';
      this.newContent = '';
      this.newImportance = 'moyenne';
    }
  }
}
