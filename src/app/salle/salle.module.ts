import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LesSallesComponent } from './les-salles/les-salles.component';

import { GestionSallesComponent } from './gestion-salles/gestion-salles.component';
import { DeleteSalleComponent } from './delete-salle/delete-salle.component';
import { ConsultSalleComponent } from './consult-salle/consult-salle.component';
import { EditSalleComponent } from './edit-salle/edit-salle.component';
import { SharedModule } from "../shared/shared.module";
import { EquipementComponent } from './equipement/equipement.component';
import { AddSalleComponent } from './add-salle/add-salle.component';
@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        GestionSallesComponent,
        LesSallesComponent,
        DeleteSalleComponent,
        ConsultSalleComponent,
        EditSalleComponent,
        EquipementComponent,
        AddSalleComponent,
    ],
    entryComponents: [
        DeleteSalleComponent,
        ConsultSalleComponent,
        EditSalleComponent,
        EquipementComponent,
        AddSalleComponent
    ],
})
export class SalleModule { }
