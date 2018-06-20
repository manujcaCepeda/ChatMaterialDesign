import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../models/user.model';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() usuarioActual: User;

  friendsRef: AngularFireList<User[]>;
  friends: Observable<any>;
  userLogin: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.friendsRef = this.authService.getUsers();
    this.friends = this.friendsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    this.authService.authUser().subscribe(user => {
      if (user) {
        this.userLogin = user;
      }
    });
  }

}
