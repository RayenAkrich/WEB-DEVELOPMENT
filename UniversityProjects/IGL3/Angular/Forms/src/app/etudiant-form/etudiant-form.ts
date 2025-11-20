import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Etudiant } from '../etudiant';

@Component({
  selector: 'app-etudiant-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './etudiant-form.html',
  styleUrl: './etudiant-form.css',
})
export class EtudiantForm {
  @ViewChild('etudiantForm') etudiantFormRef!: NgForm;

  classes = ['MPI', 'MI', 'IGL', 'IDS', 'ICE'];
  
  model = new Etudiant(18, 'Rayen', this.classes[0], 'Akriche');
  
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newEtudiant() {
    this.model = new Etudiant(42, '', '');
    // Réinitialiser le formulaire pour effacer les indicateurs
    if (this.etudiantFormRef) {
      this.etudiantFormRef.resetForm();
    }
  }
}
