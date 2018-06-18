import { Injectable } from "@angular/core";
// import 'rxjs/add/operator/toPromise';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { resolve, reject } from "q";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }


  login(email: string, password: string) {
    //return new Promise((resolve, reject) => {
      return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        resolve(user);
      }, err => reject(err));
    //});
  }

  register(email, password, name){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        resolve(user);
      }, err => reject(err));
  }


  logout() {
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        this.afAuth.auth.signOut()
        resolve();
      }
      else{
        reject();
      }
    });
  }
    
}
