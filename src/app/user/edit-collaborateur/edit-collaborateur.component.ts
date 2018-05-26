import { Component, OnInit } from '@angular/core';

import {  Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';



import {UserService} from './../../user.service';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-edit-collaborateur',
  templateUrl: './edit-collaborateur.component.html',
  styleUrls: ['./edit-collaborateur.component.css']
})
export class EditCollaborateurComponent  {
 
constructor(public dialogRef: MatDialogRef<EditCollaborateurComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public dataService: UserService) { }

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

  //stopEdit(): void {
   // this.dataService.updateItem(this.data);
  //}

stopEdit() {
    try {
    this.dataService.updateItem(this.data.matricule,this.data)
      .subscribe(resp => {
       this.data = resp

      },
        error => {
          console.error("Error saving food!");
        }
      );
    }
    catch (e) {
      console.log(e);
    }
  }



  
}
