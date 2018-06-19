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
    this.authService.login(this.email, this.password)
      .then(res => {
        this.router.navigateByUrl('/chat');
      }, error => {
        console.log("error: " + error.message);
        this.errorMessage = "Credenciales Inválidas!"
      });
  }


  loginGoogle(){
    this.authService.loginGoogle()
      .then(res => {
        this.router.navigateByUrl('/chat');
      }, error => {
        console.log("error: " + error.message);
        this.errorMessage = "Credenciales Inválidas!"
      });
    
  }
}
