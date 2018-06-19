import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { AuthService } from '../services/auth.service';

@Injectable()
export class UserResolver implements Resolve<any> {

  constructor(public authService: AuthService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) : Promise<any> {
    
    //let user = new FirebaseUserModel();

    return new Promise((resolve, reject) => {
      this.authService.getCurrentUser()
      .then(res => {
        if(res.providerData[0].providerId == 'password'){
          /*user.image = 'http://dsi-vd.github.io/patternlab-vd/images/fpo_avatar.png';
          user.name = res.displayName;
          user.provider = res.providerData[0].providerId;*/
          return resolve();
        }
        else{
          /*user.image = res.photoURL;
          user.name = res.displayName;
          user.provider = res.providerData[0].providerId;*/
          return resolve();
        }
      }, err => {
        this.router.navigate(['/login']);
        return reject(err);
      })
    })
  }
}
