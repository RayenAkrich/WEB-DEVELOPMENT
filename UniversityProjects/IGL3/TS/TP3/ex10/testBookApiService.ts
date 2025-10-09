import { BookApiService } from './services/BookApiService.js';

async function testFetchBooks() {
  const books = await BookApiService.fetchBooks();
  console.log('Books fetched from API:', books);
  // Simple test: check if the result is an array and contains expected data
  if (Array.isArray(books)) {
    console.log('Test passed: API returned expected books.');
  } else {
    console.error('Test failed: API did not return expected books.');
  }
}

testFetchBooks();
