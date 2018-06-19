import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
  ) { }


  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(user => {
          resolve(user);
        }, err => reject(err));
    });
  }

  register(email, password, name) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(user => {
          debugger;
          this.setUserData(email, name, "online", user.user.uid, "");
          resolve(user);
        }, err => reject(err));
    });
  }

  logout() {
    return new Promise((resolve, reject) => {
      if (this.afAuth.auth.currentUser) {
        this.afAuth.auth.signOut()
        resolve();
      }
      else {
        reject();
      }
    });
  }

  loginGoogle() {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(user => {
          debugger;
          this.setUserData(user.user.email, user.user.displayName, "online", user.user.uid, user.user.photoURL);
          resolve(user);
        }, err => reject(err));
    });
  }

  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      var user = this.afAuth.auth.onAuthStateChanged(function (user) {
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      })
    })
  }

  setUserData(email: string, name: string, status: string, currentUserId: string, avatar: string) {
    const path = `users/${currentUserId}`;
    const data = {
      email: email,
      name: name,
      status: status,
      avatar: avatar
    };
    this.db.object(path).update(data)
      .catch(error => console.log(error));
  }

  getUserByUid(uid: string): AngularFireObject<User> {
    const path = `/users/${uid}`;
    return this.db.object(path);
  }

}
