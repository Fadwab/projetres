import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {  Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatPaginator} from '@angular/material';
import { DeleteSalleComponent } from "../delete-salle/delete-salle.component";
import { ConsultSalleComponent } from "../consult-salle/consult-salle.component";
import { EditSalleComponent } from "../edit-salle/edit-salle.component";
import {Http ,Response} from '@angular/http';


import { SalleService } from "./../../service/salle.service";
import { Salle } from './../../models/salle.model';
import 'rxjs/add/operator/filter';
import { ElementRef} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { MatSort} from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';









import {BehaviorSubject} from 'rxjs/BehaviorSubject';




import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { EquipementComponent } from "../equipement/equipement.component";
import { AddSalleComponent } from "../add-salle/add-salle.component";

@Component({
  selector: 'app-gestion-salles',
  templateUrl: './gestion-salles.component.html',
  styleUrls: ['./gestion-salles.component.css'],
  providers:[SalleService]
})
export class GestionSallesComponent implements OnInit {
  displayedColumns = ['salle_id', 'nom', 'etage', 'bloc', 'capacite','equipement', 'actions'];
  exampleDatabase: SalleService | null;
  dataSource: ExampleDataSource | null;
  index: number;
  salle_id: number;

  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public dataService: SalleService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
    this.loadData();
  }
affEquip(i: number, salle_id: number,nom:string, climatisation:boolean , tableau:boolean , vedeo_conf:boolean,retroprojecteur:boolean): void {
    let dialogRef = this.dialog.open(EquipementComponent, {
      width: '25%',
    
      data: {
        nom:nom,
        climatisation:climatisation,
        tableau:tableau,
        vedeo_conf:vedeo_conf,
        retroprojecteur:retroprojecteur

      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }


















 refresh() {
    this.loadData();
  }

 addNew(salle: Salle) {
    const dialogRef = this.dialog.open(AddSalleComponent, {
     width: '40%',
      height:'70%',
      data: {salle: salle }
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

  startEdit(salle_id:number,nom: string,etage: string, bloc: string,capacite: string,vedeo_conf:boolean,retroprojecteur:boolean,tableau:boolean,climatisation:boolean) {
    
    // index row is used just for debugging proposes and can be removed
   
    console.log(this.index);
    const dialogRef = this.dialog.open(EditSalleComponent, {
      data: {salle_id:salle_id, nom:nom , etage:etage,bloc:bloc,capacite:capacite,vedeo_conf:vedeo_conf,retroprojecteur:retroprojecteur,tableau:tableau,climatisation:climatisation}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.salle_id === this.salle_id);
        // Then you update that record using data from dialogData (values you enetered)
        this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
        // And lastly refresh table
        this.refreshTable();
      }
    });
  }

  deleteItem(salle_id: number) {
    
    this.salle_id= salle_id;
    const dialogRef = this.dialog.open( DeleteSalleComponent, {
      data: {salle_id:salle_id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.salle_id === this.salle_id);
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
    this.exampleDatabase = new SalleService(this.httpClient);
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


export class ExampleDataSource extends DataSource<Salle> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: Salle[] = [];
  renderedData: Salle[] = [];

  constructor(public _exampleDatabase: SalleService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Salle[]> {
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
      this.filteredData = this._exampleDatabase.data.slice().filter((salle: Salle) => {
        const searchStr = (salle.salle_id + salle.nom + salle.etage).toLowerCase();
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
  sortData(data: Salle[]):Salle[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'salle_id': [propertyA, propertyB] = [a.salle_id, b.salle_id]; break;
        case 'nom': [propertyA, propertyB] = [a.nom, b.nom]; break;
        case 'etage': [propertyA, propertyB] = [a.etage, b.etage]; break;
        case 'bloc': [propertyA, propertyB] = [a.bloc, b.bloc]; break;
        case 'capacite': [propertyA, propertyB] = [a.capacite, b.capacite]; break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}