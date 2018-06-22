import { ChatMessage } from './../models/chat-message.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    constructor(private db: AngularFireDatabase) {
    }

    sendMessage(msg: string, key: string, userId: String) {
        const timestamp = this.getTimeStamp();
        const itemsRef = this.db.list(`/users/${userId}/chats/${key}`);
        itemsRef.push({
            message: msg,
            time: timestamp,
            who: userId
        });

        const itemsRefContacto = this.db.list(`/users/${key}/chats/${userId}`);
        itemsRefContacto.push({
            message: msg,
            time: timestamp,
            who: userId
        });
    }

    getMessages(key: string, userId: string): AngularFireList<ChatMessage[]> {
        let path = `/users/${userId}/chats/${key}`;
        return this.db.list(path, ref => ref.limitToLast(25).orderByKey());
    }


    getTimeStamp() {
        const now = new Date();
        const date = now.getUTCFullYear() + '/' +
            (now.getUTCMonth() + 1) + '/' +
            now.getUTCDate();
        const time = now.getUTCHours() + ':' +
            now.getUTCMinutes() + ':' +
            now.getUTCSeconds();

        return (date + ' ' + time);
    }
}
