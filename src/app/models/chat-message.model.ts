export class ChatMessage {
    $key?: string;
    message?: string;
    who?: string;
    time?: Date = new Date();
}