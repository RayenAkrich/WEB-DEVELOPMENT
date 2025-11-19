import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  // Propriété indiquant si l'utilisateur est connecté
  isLoggedIn: boolean = false;
  
  // Propriété pour le nom d'utilisateur (pour le défi)
  username: string = '';
  
  // Nom requis pour la connexion (défi)
  requiredName: string = 'Rayen';
  
  // Méthode pour basculer l'état de connexion
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  
  // Méthode pour se connecter avec validation (défi)
  login() {
    if (this.username === this.requiredName) {
      this.isLoggedIn = true;
    }
  }
}
