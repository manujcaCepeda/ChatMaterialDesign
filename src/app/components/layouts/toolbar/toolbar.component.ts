import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  usuarioActual: any = {};
  isRegister: boolean;
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.isRegister = false;
    this.usuarioActual = {
      avatar: "assets/img/avatars/profile.jpg",
      displayName: "Manuel Cepeda"
    }
  }

  register() {
    this.isRegister = !this.isRegister;
    console.log("----------------> " + this.isRegister);
    this.isRegister ? this.router.navigateByUrl('register') : this.router.navigateByUrl('login');
  }
}
