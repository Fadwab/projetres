import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from './../../services/chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

import * as $ from 'jquery';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;

  quand: string;

  messages2: any[] = [];

  constructor(public chat: ChatService,
  private _sanitizer: DomSanitizer) { }
  public inputpdf(text) : SafeHtml {
       return this._sanitizer.bypassSecurityTrustHtml(text);
    }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
        .scan((acc, val) => acc.concat(val) );

      this.chat.conversation.subscribe(
        (items) => {
    console.log('ddddddddddddddddddddd');
    console.log(this.quand);
    console.log($('#quand'));
    console.log($('#quand').val());
          if(items && items.length) {
            let item = items[0];
          console.log(item.sentBy);
          console.log(item);
            if(item.sentBy == "user") {
          console.log('user');
              this.messages2.push(items[0]);
            } else {
             let response = item.content;
             if(response == "Quand ?") {
               // code pour afficher popup
              this.messages2.push({
                content: `
                <p>${response}
                <input type='date'  id='quand'>
                <input type="button"  (click)="quandchange()">
                aa
                <app-reservation></app-reservation>
                bb
                </p>
                
                
                `,
                sentBy: 'bot'
              });
             } else {
              this.messages2.push(items[0]);
             }
            }
          }
          /*items.length?this.messages2.push(items[0]):null;

          console.log('message');
          console.log(items);
          console.log(items['content']);*/
        },
        (error) => {
          console.log(error);
        }
      );
  }

  sendMessage() {
    /*this.messages2.push({
      content: this.formValue,
      sentBy: 'user'
    });*/
    this.chat.converse(this.formValue);
    this.formValue = '';
  }

  quandchange() {
    console.log('ddddddddddddddddddddd');
    console.log(this.quand);

  }

}
