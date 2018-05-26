import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-consult-salle',
  templateUrl: './consult-salle.component.html',
  styleUrls: ['./consult-salle.component.css']
})
export class ConsultSalleComponent implements OnInit {
  capacite: any;
  bloc: any;
  etage: any;
  nom: any;
  id: any;

 constructor(
    public dialogRef: MatDialogRef<ConsultSalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.id = this.data.id;
    this.nom = this.data.nom;
    this .etage = this.data.etage;
    this.bloc = this .data.bloc;
    this.capacite =this.data.capacite;
  }

}
