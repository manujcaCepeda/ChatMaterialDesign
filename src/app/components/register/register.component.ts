import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  nombre: string;
  
  errorMessage: string = "";

  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit() {
  }

  registro(){
    this.errorMessage = "";
    this.authService.register(this.email, this.password, this.nombre)
    .then(res => {
      console.log(res);
      if(res === "auth/email-already-in-use"){
        this.errorMessage = `El email ${this.email}, ya se encuentra registrado`;
        }else{
          this.router.navigateByUrl('/login')
        }
      //this.successMessage = "Your account has been created";
    }, err => {
      console.log(err.message);
      this.errorMessage = err.message;
      //this.successMessage = "";
    })
  }
}
