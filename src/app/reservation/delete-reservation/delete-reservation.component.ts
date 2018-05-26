import { Component, OnInit } from '@angular/core';
import {  Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Input, EventEmitter, Output } from '@angular/core';
import {ChangeDetectionStrategy,HostListener}from'@angular/core';
import { Action, Store } from "@ngrx/store";



@Component({
  selector: 'app-delete-reservation',
  templateUrl: './delete-reservation.component.html',
  styleUrls: ['./delete-reservation.component.css']
})
export class DeleteReservationComponent implements OnInit {
  @Input() message: String;
  @Input() modalConfirmDeleteIsVisible: Boolean;
  @Output() onConfirm = new EventEmitter<boolean>();
  constructor(
    public dialogRef: MatDialogRef<DeleteReservationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
   
    },) { }

  ngOnInit() {
  }

  confirmDeleteReservation(){
    this.modalConfirmDeleteIsVisible = false;
    this.onConfirm.emit(true);

  }
}
