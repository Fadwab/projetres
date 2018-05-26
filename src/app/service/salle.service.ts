import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';

import { OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Salle } from './../models/salle.model';

import { Observable} from 'rxjs/Observable'
import { Headers, Http ,Response } from '@angular/http';






@Injectable()
export class SalleService implements OnInit {
      salle_id ;
  headers: Headers;
  private readonly URL = 'http://localhost:8000/webapi/posts/';
  private readonly API_URL = 'http://localhost:8000/webapi/lists/';
  private readonly URL_API = 'http://localhost:8000/webapi/salle/';

  dataChange: BehaviorSubject<Salle[]> = new BehaviorSubject<Salle[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;




    constructor(
        private http: HttpClient
    ) {this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json'); }

ngOnInit() {
    this.salle_id =this.salle_id;
  }

get data(): Salle[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllIssues(): void {
    this.http.get<Salle[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }

  // DEMO ONLY, you can find working methods below
  addIssue (salle: Salle): void {
    this.dialogData = salle;
  }

  updateIssue (salle: Salle): void {
    this.dialogData = salle;
  }

  deleteIssue (salle_id: number): void {
    console.log(salle_id);
  }

addItem(kanbanItem): void {
    this.http.post(this.URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
     
      },
      (err: HttpErrorResponse) => {
     
    });
   }

deleteItem(salle_id: number): void {
    this.http.delete(this.URL_API + salle_id + '/').subscribe(data => {
      console.log('fffff');
       
      },
      (err: HttpErrorResponse) => {
        
      }
    );
  }



updateItem(salle_id:number,data) {
    return this.http.put(this.URL_API + salle_id + '/', data);
  }


































    rechercheSalle(data) {
        // return this.http.post('http://localhost:8000/webapi/lists/', data);
        return this.http.get('http://localhost:8000/webapi/lists/');
    }

    addReservation(data) {
        return this.http.post('http://localhost:8000/webapi/postr/', data);
    }

    getReservations() {
        return this.http.get('http://localhost:8000/webapi/listr/');
    }

    deleteReservation(id) {
        return this.http.delete('http://localhost:8000/webapi/reservation/' + id + "/");
    }

}
