import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Salle } from "../../models/salle.model";
@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.css']
})
export class EquipementComponent implements OnInit {

   constructor(
    public dialogRef: MatDialogRef<EquipementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Salle) { }

  ngOnInit() {
  }

}
