import { Component, OnInit } from '@angular/core';
import {  Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { SalleService } from "../../service/salle.service";
@Component({
  selector: 'app-delete-salle',
  templateUrl: './delete-salle.component.html',
  styleUrls: ['./delete-salle.component.css']
})
export class DeleteSalleComponent implements OnInit {
constructor(
    public dialogRef: MatDialogRef<DeleteSalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data,public dataService: SalleService ) { }

  ngOnInit() {
  }
onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.dataService.deleteItem(this.data.salle_id);
  }
}
