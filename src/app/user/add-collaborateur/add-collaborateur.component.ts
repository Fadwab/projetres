import { Component, OnInit ,Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { UserService } from './../../user.service';
import {FormControl, Validators} from '@angular/forms';
import { User } from '../../models/user.model';
@Component({
  selector: 'app-add-collaborateur',
  templateUrl: './add-collaborateur.component.html',
  styleUrls: ['./add-collaborateur.component.css']
})
export class AddCollaborateurComponent  {

  constructor(public dialogRef: MatDialogRef<AddCollaborateurComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User,
              public dataService: UserService) { }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
  // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.dataService.addItem(this.data);
    alert(" ajout avec succés ")
  }

}
