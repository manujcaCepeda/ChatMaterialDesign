import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ChatComponent } from './components/chat/chat.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChatStartComponent } from './components/chat/chat-start/chat-start.component';
import { ChatViewComponent } from './components/chat/chat-view/chat-view.component';
import { AboutComponent } from './components/profile/about/about.component';
import { PhotosComponent } from './components/profile/photos/photos.component';
import { MessageComponent } from './components/chat/message/message.component';

import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { MaterialModule } from './shared/material.module';



@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    ChatStartComponent,
    ChatViewComponent,
    AboutComponent,
    PhotosComponent,
    MessageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
