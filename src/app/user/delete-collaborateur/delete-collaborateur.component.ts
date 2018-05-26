import { Component, OnInit } from '@angular/core';

import {  Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { UserService } from "./../../user.service";





@Component({
  selector: 'app-delete-collaborateur',
  templateUrl: './delete-collaborateur.component.html',
  styleUrls: ['./delete-collaborateur.component.css']
})
export class DeleteCollaborateurComponent  {
  constructor(public dialogRef: MatDialogRef<DeleteCollaborateurComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public dataService: UserService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.dataService.deleteItem(this.data.matricule);
  }
}
