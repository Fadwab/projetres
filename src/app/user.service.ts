import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { User } from './models/user.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable} from 'rxjs/Observable'
import { Headers, Http ,Response } from '@angular/http';
@Injectable()
export class UserService implements OnInit  {
  matricule ;
  headers: Headers;
  private readonly URL = 'http://localhost:8000/webapi/';
  private readonly API_URL = 'http://localhost:8000/webapi/list/';

  dataChange: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor (private httpClient: HttpClient ) { this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');}
  ngOnInit() {
    this.matricule =this.matricule;
  }

  get data(): User[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllIssues(): void {
    this.httpClient.get<User[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }

  // DEMO ONLY, you can find working methods below
  addIssue (user: User): void {
    this.dialogData = user;
  }

  updateIssue (user: User): void {
    this.dialogData = user;
  }

  deleteIssue (matricule: number): void {
    console.log(matricule);
  }





deleteItem(matricule: number): void {
    this.httpClient.delete(this.URL + matricule + '/').subscribe(data => {
      console.log('fffff');
       
      },
      (err: HttpErrorResponse) => {
        
      }
    );
  }




 addItem2(userData):Observable<any>{
  const url = 'http://localhost:8000/webapi/';
    console.log(JSON.stringify(userData));
    return this.httpClient.post(url, JSON.stringify({
    "matricule": userData.matricule,
    "nom": userData.nom,
    "prenom": userData.prenom,
    "email": userData.email,
    "adresse": userData.adresse,
    "mot_de_passe": userData.mot_de_passe,

    }), 
      
    )
     




 }




 addItem(kanbanItem): void {
    this.httpClient.post(this.URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
     
      },
      (err: HttpErrorResponse) => {
     
    });
   }

//updateItem(matricule:number  ): void {
  //  this.httpClient.put(this.URL + matricule).subscribe(data => {
     //   this.dialogData = kanbanItem;
       
    //  },
     // (err: HttpErrorResponse) => {
        
     // }
   // );
 // }



updateItem(matricule:number,data) {
    return this.httpClient.put(this.URL + matricule + '/', data);
  }





}




















/* REAL LIFE CRUD Methods I've used in my projects. ToasterService uses Material Toasts for displaying messages:

    // ADD, POST METHOD
    addItem(kanbanItem: KanbanItem): void {
    this.httpClient.post(this.API_URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
      this.toasterService.showToaster('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }

    // UPDATE, PUT METHOD
     updateItem(kanbanItem: KanbanItem): void {
    this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
        this.dialogData = kanbanItem;
        this.toasterService.showToaster('Successfully edited', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }

  // DELETE METHOD
  deleteItem(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
        this.toasterService.showToaster('Successfully deleted', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
*/




