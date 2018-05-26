import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { SalleService } from './../../service/salle.service';
import {FormControl, Validators} from '@angular/forms';
import { Salle } from '../../models/salle.model';
@Component({
  selector: 'app-add-salle',
  templateUrl: './add-salle.component.html',
  styleUrls: ['./add-salle.component.css']
})
export class AddSalleComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddSalleComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Salle,
              public dataService: SalleService) { }

  ngOnInit() {
  }
public confirmAdd(): void {
    this.dataService.addItem(this.data);
    alert(" ajout avec succés ")
  }

}
