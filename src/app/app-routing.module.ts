import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { ReservationEventComponent } from "./reservation/reservation-event/reservation-event.component";
import { ReservationComponent } from "./reservation/reservation/reservation.component";
import { GestionAcceeComponent } from "./user/gestion-accee/gestion-accee.component";
import { GestionSallesComponent } from "./salle/gestion-salles/gestion-salles.component";
import { ChatComponent } from "./chat/chat/chat.component";
import { AppContenuComponent } from "./app-contenu/app-contenu.component";
import { ReservationEventDayComponent } from "./reservation/reservation-event-day/reservation-event-day.component";
import { ReservationEventWeekComponent } from "./reservation/reservation-event-week/reservation-event-week.component";
import { LesSallesComponent } from "./salle/les-salles/les-salles.component";
import { TstComponent } from "./tst/tst.component";
const routes: Routes = [
    
    //{ path: 'dashboard', component: AppContenuComponent },
     { path: 'login', component: LoginComponent, },

     { path: 'month', component: ReservationEventComponent, },
     { path: 'reserv', component:ReservationComponent },
    { path: 'gestion', component: GestionAcceeComponent, },  
    { path: 'gestionSalles', component: GestionSallesComponent, },
    { path: 'chat', component: ChatComponent,},
  
    { path: 'day' ,component: ReservationEventDayComponent},
     { path: 'week' ,component: ReservationEventWeekComponent},
     { path: 'lesSalles' ,component: LesSallesComponent},
     {path: 'test' ,component:TstComponent},
     { path: '', redirectTo:'login',pathMatch:"full" },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
