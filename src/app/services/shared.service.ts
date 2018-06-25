import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '@firebase/auth-types';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  private contacto = new BehaviorSubject<User>(null);
  contactoSeleccionado = this.contacto.asObservable();

  constructor() { }

  changeMessaeg(user: User) {
    this.contacto.next(user);
  }
  

}
