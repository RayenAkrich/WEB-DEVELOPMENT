import { Component } from '@angular/core';
import { EtudiantForm } from './etudiant-form/etudiant-form';

@Component({
  selector: 'app-root',
  imports: [EtudiantForm],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'Gestion des Étudiants';
}
