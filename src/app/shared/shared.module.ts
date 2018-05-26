import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CollapseModule } from 'ngx-bootstrap/collapse';

import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule , MatButtonModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from "@angular/material/icon";
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { DemoUtilsModule } from './../../demo-utils/module';
import { CalendarModule } from 'angular-calendar';



import {MatToolbarModule} from '@angular/material/toolbar';

import { AngularFontAwesomeModule } from 'angular-font-awesome';


//import { FullCalendarModule } from 'ng-fullcalendar';

import { OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';

import { MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    NgbModalModule.forRoot(),
    DemoUtilsModule,
    MatIconModule,
    MatInputModule , MatButtonModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule, 
    MatSlideToggleModule,
    FormsModule, ReactiveFormsModule,
    MatToolbarModule,
    MatSortModule,
    AngularFontAwesomeModule,
    CollapseModule.forRoot(),
  ],
  declarations: [],
  exports: [
    DemoUtilsModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    DemoUtilsModule,
    MatIconModule,
    MatInputModule , MatButtonModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule, 
    MatSlideToggleModule,
    FormsModule, ReactiveFormsModule,
    MatToolbarModule,
    MatSortModule,
    AngularFontAwesomeModule,
    CollapseModule,
    CalendarModule
  ]
})
export class SharedModule { }
