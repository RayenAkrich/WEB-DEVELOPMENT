import { Livres } from '../models/Livres.js';

export class BookApiService {
  static async fetchBooks(): Promise<Livres[]> {
    // return test data
    return [
      new Livres(1, 'Book 1', 'Rayen Akriche', 2025, true),
      new Livres(2, 'Book 2', 'Ahmed ', 2004, true),
      new Livres(3, 'Book 3', 'Israa ', 2016, false)
    ];
  }
}
