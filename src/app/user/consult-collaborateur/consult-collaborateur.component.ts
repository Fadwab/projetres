import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-consult-collaborateur',
  templateUrl: './consult-collaborateur.component.html',
  styleUrls: ['./consult-collaborateur.component.css']
})
export class ConsultCollaborateurComponent implements OnInit {
  nom: any;
prenom:any;
matricule : any;
adresse : any;


 constructor(
    public dialogRef: MatDialogRef<ConsultCollaborateurComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.nom = this.data.nom;
    this.prenom = this.data.prenom;
    this .adresse = this.data.adresse;
    this.matricule = this .data.matricule;

  }

}
