import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {UsertableComponent} from './../usertable/usertable.component'; 
@Component({
  selector: 'app-consult-reservation',
  templateUrl: './consult-reservation.component.html',
  styleUrls: ['./consult-reservation.component.css']
})
export class ConsultReservationComponent implements OnInit {
 public passedId: number;
 public passeddate : string;
 public passedheuredeb : string;
 public passedheurefin : string ; 
 public passedsalle : string;
 public passednbparticipant : string;
 public passedstatut : string;





    constructor(
    public dialogRef: MatDialogRef<ConsultReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  
  ngOnInit() {this.passedId = this.data.id;
    this.passeddate = this.data.date; 
     this. passedheuredeb = this.data.heuredeb;
     this . passedheurefin = this.data.heurefin;
     this . passedsalle = this.data.salle;
     this .passednbparticipant = this.data.nbparticipant;
     this.passedstatut=this.data.statut;
  }



}
