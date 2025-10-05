import { Repository } from '../utils/Repository';
import { Livres } from '../models/Livres';

export class Library {
  private books: Repository<Livres>;

  constructor() {
    this.books = new Repository<Livres>();
  }

  addBook(book: Livres): void {
    this.books.add(book);
  }

  removeBook(id: number): boolean {
    return this.books.remove(id);
  }

  searchBookByTitle(title: string): Livres[] {
    return this.books.getAll().filter((book : Livres) => book.title.toLowerCase().startsWith(title.toLowerCase()));
  }

  borrowBook(id: number): boolean {
    const book = this.books.getById(id);
    if (book && book.available) {
      book.available = false;
      return true;
    }
    return false;
  }

  returnBook(id: number): boolean {
    const book = this.books.getById(id);
    if (book && !book.available) {
      book.available = true;
      return true;
    }
    return false;
  }

  getAllBooks(): Livres[] {
    return this.books.getAll();
  }
}
