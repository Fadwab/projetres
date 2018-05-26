import { Component, OnInit } from '@angular/core';
import {  Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SalleService } from "../../service/salle.service";
@Component({
  selector: 'app-edit-salle',
  templateUrl: './edit-salle.component.html',
  styleUrls: ['./edit-salle.component.css']
})
export class EditSalleComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditSalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any , public dataService: SalleService) { }

  ngOnInit() {
  }
onNoClick(): void {
    this.dialogRef.close();
  }

  //stopEdit(): void {
   // this.dataService.updateItem(this.data);
  //}

stopEdit() {
    try {
    this.dataService.updateItem(this.data.salle_id,this.data)
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
