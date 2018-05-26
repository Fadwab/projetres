import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {UsertableComponent} from '../usertable/usertable.component'; 

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})
export class EditReservationComponent implements OnInit {
public passedsalle : string;


  constructor(
    public dialogRef: MatDialogRef<EditReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }



  val = this.passedsalle;

 salles = [
    {value: '1', viewValue: 'hannabaal'},
    {value: '2', viewValue: 'Ellisa'},
    
  ];




 nb = [
    {value: '1', viewValue: '1',},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
    {value: '7', viewValue: '7'},
    {value: '8', viewValue: '8'},
    {value: '9', viewValue: '9'},
    {value: '10', viewValue: '10'},
    {value: '11', viewValue: '11'},
    {value: '12', viewValue: '12'},
    {value: '13', viewValue: '13'},
    {value: '14', viewValue: '14'},
    {value: '15', viewValue: '15'},
  ];
a= this.nb[0].value;

  onNoClick(): void {
    this.dialogRef.close();
  }

 ngOnInit() {
     this.passedsalle = this.data.salle;
     this. val = this.passedsalle;
    
  }


}
