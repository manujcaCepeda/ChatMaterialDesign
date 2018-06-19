import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  errorMessage: string = "";

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }


  login() {
    this.errorMessage = "";
    console.log("email: " + this.email);
    console.log("password: " + this.password);
    // this.router.navigateByUrl('chat');

    this.authService.login(this.email, this.password)
      .then(res => {
        this.router.navigateByUrl('/chat');
      }, error => {
        console.log("error: " + error.message);
        this.errorMessage = "Credenciales Inválidas!"
      });
    // .catch(error => {
    //   console.log("error: " + error.message);
    //   this.errorMessage = "Credenciales Inválidas!"
    // });
  }


  loginGmail(){
    /*this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then( user => {
      debugger;
      let authState = user;
      this.authService.setUserDataGmail(authState.user.uid, authState.user.email, authState.user.displayName, authState.user.photoURL);
      this.router.navigateByUrl('chat');

    });*/
    this.authService.loginGmail()
      .then(res => {
        this.router.navigateByUrl('/chat');
      }, error => {
        console.log("error: " + error.message);
        this.errorMessage = "Credenciales Inválidas!"
      });
    
  }
}
