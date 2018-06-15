import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  usuarioActual: any = {};

  constructor(private router: Router) { }

  ngOnInit() {
    this.usuarioActual = {
      avatar: "assets/img/avatars/profile.jpg",
      displayName: "Manuel Cepeda"
    }
  }


  logout() {
    console.log('logout triggered');
    this.router.navigateByUrl('login');
    // this.authService.logout();
  }
}
