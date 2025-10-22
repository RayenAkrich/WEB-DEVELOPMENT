import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './produit.html',
  styleUrl: './produit.css'
})
export class Produit {
  @Input() nomProduit: string = '';
  prix: number = 999.99;

  imageUrl : string = 'assets/produit.jpg';
  enStock : boolean = true;

  @Output() addToCart = new EventEmitter<string>();

  toggleStock() {
    this.enStock = !this.enStock;
  }

  afficherAlerte() {
    this.addToCart.emit(this.nomProduit);
  }
}
