import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  usuarioActual: any = {};
  
  constructor() { }

  ngOnInit() {
    this.usuarioActual = {
      avatar: "assets/img/avatars/profile.jpg",
      displayName: "Manuel Cepeda"
    }
  }

}
