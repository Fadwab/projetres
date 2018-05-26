import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatComponent } from './chat/chat.component';
import { SharedModule } from "../shared/shared.module";
@NgModule({
  imports: [
    
    CommonModule,
    SharedModule
  ],
  exports:[
ChatComponent,

  ]
  ,
  declarations: [
    ChatComponent,
  ]
})
export class ChatModule { }
