import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionAcceeComponent } from './gestion-accee/gestion-accee.component';
import { DeleteCollaborateurComponent } from './delete-collaborateur/delete-collaborateur.component';
import { ConsultCollaborateurComponent } from './consult-collaborateur/consult-collaborateur.component';
import { EditCollaborateurComponent } from './edit-collaborateur/edit-collaborateur.component';
import { AddCollaborateurComponent } from './add-collaborateur/add-collaborateur.component'
import { SharedModule } from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    declarations: [
        GestionAcceeComponent,
        DeleteCollaborateurComponent,
        ConsultCollaborateurComponent,
        EditCollaborateurComponent,
        AddCollaborateurComponent,
    ],
    entryComponents: [
        AddCollaborateurComponent,
        DeleteCollaborateurComponent,
        ConsultCollaborateurComponent,
        EditCollaborateurComponent,
    ]
})
export class UserModule { }
