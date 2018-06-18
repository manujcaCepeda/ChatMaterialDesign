import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  usuarioActual: any = {};

  constructor(private router: Router, private authService:AuthService) { }

  ngOnInit() {
    this.usuarioActual = {
      avatar: "assets/img/avatars/profile.jpg",
      displayName: "Manuel Cepeda"
    }
  }

  
  logout() {
    this.authService.logout()
    .then((res) => {
      //this.location.back();
      this.router.navigateByUrl('/login');
    }, (error) => {
      console.log("Logout error", error);
    });

}
}
