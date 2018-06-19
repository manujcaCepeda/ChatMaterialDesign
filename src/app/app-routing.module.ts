import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './shared/auth.guard';
import { UserResolver } from './shared/user.resolver';

//
const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  {path: 'chat', component: ChatComponent, resolve: { data: UserResolver}},
  {path: 'profile', component: ProfileComponent, resolve: { data: UserResolver}},
  {path: '', redirectTo:'login', pathMatch: 'full'},
  { path: '**', redirectTo:'login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
