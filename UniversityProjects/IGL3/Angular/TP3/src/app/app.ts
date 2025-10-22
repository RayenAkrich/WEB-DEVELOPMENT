import { Component, signal } from '@angular/core';
import { Bienvenue } from './bienvenue/bienvenue';
import { Produit } from './produit/produit';
import { Utilisateur } from './utilisateur/utilisateur';
import { Panier } from './panier/panier';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ Bienvenue, Produit , FormsModule , Utilisateur, Panier],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  message: string = "Bienvenue sur notre site !";

  onAddToCart(item: string) {
    console.log('Produit ajouté au panier:', item);
    // Ici, vous pouvez ajouter la logique pour gérer l'ajout au panier
  }
}
