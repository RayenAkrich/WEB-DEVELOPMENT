import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panier.html',
  styleUrl: './panier.css'
})
export class Panier {
  items: string[] = [];

  addItem(item: string) {
    this.items.push(item);
  }
}