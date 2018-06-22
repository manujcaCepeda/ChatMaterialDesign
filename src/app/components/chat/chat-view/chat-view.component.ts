import { AuthService } from './../../../services/auth.service';
import { ChatService } from './../../../services/chat.service';
import { User } from './../../../models/user.model';
import { ChatMessage } from './../../../models/chat-message.model';
import { Component, OnInit, DoCheck, Input } from '@angular/core';

import { AngularFireList } from 'angularfire2/database';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit, DoCheck {

  @Input() user: any;
  contacto: any;

  chatsRef: AngularFireList<ChatMessage[]>;
  chatsSend: Observable<any>;
  displayNameOld: string = "";
  message: string;


  constructor(private chat: ChatService,
    private authService: AuthService,
    private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.contactoSeleccionado.subscribe(contacto => this.contacto = contacto);
  }

  ngDoCheck() {
    if (this.contacto && this.contacto.name !== this.displayNameOld) {
      this.displayNameOld = this.contacto.name;
      this.getChats();
    }
  }

  getChats() {
    this.chatsRef = this.chat.getMessages(this.contacto.key, this.user.uid);
    this.chatsSend = this.chatsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  sendChat() {
    debugger;
    this.chat.sendMessage(this.message, this.contacto.key, this.user.uid);
    this.message = '';
  }

}
