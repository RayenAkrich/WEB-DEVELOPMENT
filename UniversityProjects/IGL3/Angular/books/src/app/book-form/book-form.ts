import { Component, Input, Output, EventEmitter, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../book';

@Component({
  selector: 'app-book-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css'
})
export class BookForm implements OnChanges {
  @Input() categories: string[] = [];
  @Input() bookToEdit: Book | null = null;
  @Output() bookAdded = new EventEmitter<Book>();
  @Output() bookUpdated = new EventEmitter<Book>();
  @Output() editCancelled = new EventEmitter<void>();

  @ViewChild('bookForm') form?: NgForm;

  model: Book = new Book(0, '', '', '', '', '', '', true, 0);
  isEditMode = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bookToEdit'] && this.bookToEdit) {
      this.model = { ...this.bookToEdit };
      this.isEditMode = true;
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      if (this.isEditMode) {
        this.bookUpdated.emit(this.model);
      } else {
        this.bookAdded.emit({ ...this.model });
      }
      this.resetForm();
    }
  }

  cancelEditing(): void {
    this.resetForm();
    this.editCancelled.emit();
  }

  resetForm(): void {
    this.model = new Book(0, '', '', '', '', '', '', true, 0);
    this.isEditMode = false;
    this.form?.reset();
  }

  // Validation custom: titre ne peut pas être que des chiffres
  isTitleOnlyNumbers(): boolean {
    return /^\d+$/.test(this.model.title);
  }
}
