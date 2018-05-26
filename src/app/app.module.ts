import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';


import{ UserService} from './user.service';
import{ ChatService} from './services/chat.service';
import {SalleService} from './service/salle.service';

import { AppRoutingModule } from "./app-routing.module";
import { ReservationModule } from "./reservation/reservation.module";
import { UserModule } from "./user/user.module";
import { ChatModule } from "./chat/chat.module";
import { SalleModule } from "./salle/salle.module";
import { SharedModule } from "./shared/shared.module";
import { LoginService } from "./login.service";
import { AppContenuComponent } from './app-contenu/app-contenu.component';
import { TstComponent } from './tst/tst.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppContenuComponent,
    TstComponent,
    SanitizeHtmlPipe,
    NavComponent,
    
  ],
  imports: [

    CommonModule,
    BrowserModule,
    AppRoutingModule,
    //AppContenuComponent,
    //FullCalendarModule,
    ReservationModule,
    UserModule,
    SalleModule,
    ChatModule,
    SharedModule
  ],

  providers: [
    UserService,
    ChatService,
    SalleService,
    LoginService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
