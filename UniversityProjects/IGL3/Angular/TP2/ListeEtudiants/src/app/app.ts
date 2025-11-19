import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Utilisateur } from './utilisateur/utilisateur';
import { Profil } from './profil/profil';
import { AdresseComponent } from './adresse/adresse';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Utilisateur, Profil, AdresseComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'MyClass Will be Angular Heroes';
}
