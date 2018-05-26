import { Component, OnInit , ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {  Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatPaginator} from '@angular/material';
import {Http ,Response} from '@angular/http';
import { DeleteCollaborateurComponent } from "../delete-collaborateur/delete-collaborateur.component";
import { ConsultCollaborateurComponent } from "../consult-collaborateur/consult-collaborateur.component";
import { EditCollaborateurComponent } from "../edit-collaborateur/edit-collaborateur.component";
import { UserService } from "./../../user.service";
import { User } from './../../models/user.model';
import 'rxjs/add/operator/filter';



import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';



import { ElementRef} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { MatSort} from '@angular/material';


import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { AddCollaborateurComponent } from "../add-collaborateur/add-collaborateur.component";

@Component({
  selector: 'app-gestion-accee',
  templateUrl: './gestion-accee.component.html',
  styleUrls: ['./gestion-accee.component.css'],
  providers:[UserService]
})
export class GestionAcceeComponent implements OnInit {
  displayedColumns = ['matricule', 'nom', 'username', 'email', 'password', 'actions'];
  exampleDatabase: UserService | null;
  dataSource: ExampleDataSource | null;
  index: number;
  matricule: number;

  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public dataService: UserService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this.loadData();
  }


















 refresh() {
    this.loadData();
  }

 addNew(user: User) {
    const dialogRef = this.dialog.open(AddCollaborateurComponent, {
     width: '30%',
     
      data: {user: user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
        this.refreshTable();
      }
    });
  }

  startEdit(i: number, matricule: number, nom: string, username: string, email: string,password: string) {
    this.matricule = matricule;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(EditCollaborateurComponent, {
      data: {matricule: matricule, username:username , nom: nom, email: email, password: password}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.matricule === this.matricule);
        // Then you update that record using data from dialogData (values you enetered)
        this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
        // And lastly refresh table
        this.refreshTable();
      }
    });
  }

  deleteItem(i: number, matricule: number, nom: string, username: string, email: string) {
    this.index = i;
    this.matricule= matricule;
    const dialogRef = this.dialog.open( DeleteCollaborateurComponent, {
      data: {matricule:matricule, username:username, email: email}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.matricule === this.matricule);
        // for delete we use splice in order to remove single object from DataService
        this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        this.refreshTable();
      }
    });
  }


  // If you don't need a filter or a pagination this can be simplified, you just use code from else block
  private refreshTable() {
    // if there's a paginator active we're using it for refresh
    if (this.dataSource._paginator.hasNextPage()) {
      this.dataSource._paginator.nextPage();
      this.dataSource._paginator.previousPage();
      // in case we're on last page this if will tick
    } else if (this.dataSource._paginator.hasPreviousPage()) {
      this.dataSource._paginator.previousPage();
      this.dataSource._paginator.nextPage();
      // in all other cases including active filter we do it like this
    } else {
      this.dataSource.filter = '';
      this.dataSource.filter = this.filter.nativeElement.value;
    }
  }

  public loadData() {
    this.exampleDatabase = new UserService(this.httpClient);
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
}


export class ExampleDataSource extends DataSource<User> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: User[] = [];
  renderedData: User[] = [];

  constructor(public _exampleDatabase: UserService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<User[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];

    this._exampleDatabase.getAllIssues();

    return Observable.merge(...displayDataChanges).map(() => {
      // Filter data
      this.filteredData = this._exampleDatabase.data.slice().filter((user: User) => {
        const searchStr = (user.matricule + user.nom + user.username).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
      });

      // Sort filtered data
      const sortedData = this.sortData(this.filteredData.slice());

      // Grab the page's slice of the filtered sorted data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
      return this.renderedData;
    });
  }
  disconnect() {
  }



  /** Returns a sorted copy of the database data. */
  sortData(data: User[]): User[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'matricule': [propertyA, propertyB] = [a.matricule, b.matricule]; break;
        case 'nom': [propertyA, propertyB] = [a.nom, b.nom]; break;
        case 'username': [propertyA, propertyB] = [a.username, b.username]; break;
        case 'email': [propertyA, propertyB] = [a.email, b.email]; break;
        case 'password': [propertyA, propertyB] = [a.password, b.password]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}
