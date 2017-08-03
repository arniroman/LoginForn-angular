import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UsersService } from './User.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { DataOfUsersComponent } from './data-of-users/data-of-users.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    PageProfileComponent,
    ForgotPassComponent,
    DataOfUsersComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule { }
