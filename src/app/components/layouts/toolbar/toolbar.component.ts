import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  usersRef: Observable<User>;
  usuarioActual: User = {};
  enableMenu: boolean = false;
  user: Observable<firebase.User>;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {

    this.user = this.authService.authUser();
    this.user.subscribe(user => {
      if (user && user.uid) {
        this.usersRef = this.authService.getUserByUid(user.uid).valueChanges();
        this.usersRef.subscribe(data => {
          this.usuarioActual = data;
          this.usuarioActual.uid = user.uid;
        }, error => error)
      }
    }, error => {
      console.log("////////////////////////////////2 " + error);
    });
  }


  logout() {
    this.authService.logout()
      .then((res) => {
        this.router.navigateByUrl('/login');
      }, (error) => {
        console.log("Logout error", error);
      });

  }
}
