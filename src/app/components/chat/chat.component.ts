import { SharedService } from './../../services/shared.service';
import { User } from './../../models/user.model';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  usersRef: AngularFireList<User[]>;
  users: Observable<any>;
  selectedChat: boolean = false;
  userLogin: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private authService: AuthService, private sharedService: SharedService) {

  }


  ngOnInit(): void {
    this.usersRef = this.authService.getUsers();
    this.users = this.usersRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    this.authService.authUser().subscribe(user => {
      if (user && user.uid) {
        this.authService.getUserByUid(user.uid).valueChanges().subscribe(data => {
          this.userLogin = data;
          this.userLogin.uid = user.uid;
        }, error => error)
      }
    });
  }

  getChat(contact) {
    this.selectedChat = true;
    this.sharedService.changeMessaeg(contact);
  }
}