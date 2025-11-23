import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookList {
  @Input() books: Book[] = [];
  @Output() bookDeleted = new EventEmitter<number>();
  @Output() bookEdited = new EventEmitter<Book>();

  searchTerm = '';
  filterCategory = '';
  filterAvailability = '';
  sortBy = '';

  get filteredBooks(): Book[] {
    let result = [...this.books];

    // Filtre par recherche (titre ou auteur)
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(book =>
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term)
      );
    }

    // Filtre par catégorie
    if (this.filterCategory) {
      result = result.filter(book => book.category === this.filterCategory);
    }

    // Filtre par disponibilité
    if (this.filterAvailability === 'available') {
      result = result.filter(book => book.isAvailable);
    } else if (this.filterAvailability === 'unavailable') {
      result = result.filter(book => !book.isAvailable);
    }

    // Tri
    if (this.sortBy === 'category') {
      result.sort((a, b) => a.category.localeCompare(b.category));
    } else if (this.sortBy === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (this.sortBy === 'author') {
      result.sort((a, b) => a.author.localeCompare(b.author));
    } else if (this.sortBy === 'availability') {
      result.sort((a, b) => Number(b.isAvailable) - Number(a.isAvailable));
    }

    return result;
  }

  get totalBooks(): number {
    return this.books.length;
  }

  get availableBooks(): number {
    return this.books.filter(b => b.isAvailable).length;
  }

  get categories(): string[] {
    return [...new Set(this.books.map(b => b.category))];
  }

  onDelete(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce livre ?')) {
      this.bookDeleted.emit(id);
    }
  }

  onEdit(book: Book): void {
    this.bookEdited.emit(book);
  }

  resetFilters(): void {
    this.searchTerm = '';
    this.filterCategory = '';
    this.filterAvailability = '';
    this.sortBy = '';
  }
}
