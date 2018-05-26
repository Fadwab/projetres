import { Component, OnInit,Input,ViewChild} from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { MatTableDataSource,MatPaginator} from '@angular/material';
import { UserService } from './../../user.service';
import { User } from './../../models/user.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EditReservationComponent } from "./../edit-reservation/edit-reservation.component";
import { ConsultReservationComponent } from "../consult-reservation/consult-reservation.component";
import { DeleteReservationComponent } from "../delete-reservation/delete-reservation.component";
@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  id: any;
  date : any;
  heuredeb: any;
  heurefin:any;
  salle: any;
  nbparticipant:any;
  statut:any;

   
@Input() isChecked: boolean;
  ngOnInit( ) {
    
  }
 
  constructor(public dialog: MatDialog) {}

  openDialog(value4): void {
    let dialogRef = this.dialog.open(EditReservationComponent, {
      height:'80%',
      width:'50%',

      data: {
       
          salle:value4,
         

        }
    });

      dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  openDialogDelete(): void {
      let dialogRef = this.dialog.open(DeleteReservationComponent, {
      height: '30%',
      width: '40%',

      data: {}
    });

      dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
 
openDialogConsult(value , value1 , value2 , value3 ,value4,value5,value6): void {
    let dialogRef = this.dialog.open(ConsultReservationComponent , {

  height: '80%',
  width: '50%',

     data: {
          id: value,
          date : value1,
          heuredeb : value2,
          heurefin: value3,
          salle:value4,
          nbparticipant:value5,
          statut:value6,

        }
    });

      dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }




    displayedColumns = ['id', 'date', 'heuredeb','heurefin', 'salle','nbparticipant','statut','action'];
    dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
export interface Element {
          date: string;
          id: number;
          heuredeb: number;
          heurefin:number;
          salle: string;
          nbparticipant : number;
          statut:string

}

const ELEMENT_DATA: Element[] = [
  {id: 98, date: '21/2/2017', heuredeb: 1, heurefin:3, salle: 'Hannibal',nbparticipant:5 , statut:'validée'},
  {id: 55, date: '21/3/2017', heuredeb: 1, heurefin:3, salle: 'Ellisa',nbparticipant:9, statut:'validée'},
];