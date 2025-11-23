import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../book';
import { BookForm } from '../book-form/book-form';
import { BookList } from '../book-list/book-list';

@Component({
  selector: 'app-book-container',
  imports: [CommonModule, BookForm, BookList],
  templateUrl: './book-container.html',
  styleUrl: './book-container.css'
})
export class BookContainer {
  books: Book[] = [
    new Book(1, 'Clean Code', 'Robert C. Martin', 'info@oreilly.com', '12345678', '2008-08-01', 'Informatique', true, 15),
    new Book(2, '1984', 'George Orwell', 'contact@penguin.com', '23456789', '1949-06-08', 'Roman', true, 8),
    new Book(3, 'Sapiens', 'Yuval Noah Harari', 'info@vintage.com', '34567890', '2011-01-01', 'Histoire', false, 0),
    new Book(4, 'The Art of War', 'Sun Tzu', 'classics@book.com', '45678901', '500-01-01', 'Histoire', true, 5)
  ];

  categories: string[] = ['Roman', 'Science', 'Histoire', 'Informatique', 'Art', 'Autres'];

  bookToEdit: Book | null = null;
  nextId = 5;

  addBook(book: Book): void {
    book.id = this.nextId++;
    this.books.push(book);
  }

  updateBook(updatedBook: Book): void {
    const index = this.books.findIndex(b => b.id === updatedBook.id);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
    this.bookToEdit = null;
  }

  deleteBook(id: number): void {
    this.books = this.books.filter(b => b.id !== id);
  }

  editBook(book: Book): void {
    this.bookToEdit = { ...book };
  }

  cancelEdit(): void {
    this.bookToEdit = null;
  }
}
