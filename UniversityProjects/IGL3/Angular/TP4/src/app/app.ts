import { Component, signal } from '@angular/core';
import { Welcome } from './welcome/welcome';
import { Articles } from './articles/articles';
import { Produits } from './produits/produits';
import { Taches } from './taches/taches';
import { Etudiants } from './etudiants/etudiants';

@Component({
  selector: 'app-root',
  imports: [Welcome, Articles, Produits, Taches, Etudiants],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TP4 - Directives Angular');
}
