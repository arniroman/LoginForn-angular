import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { PageProfileComponent } from './page-profile/page-profile.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { DataOfUsersComponent } from './data-of-users/data-of-users.component';
import { TableProfileComponent } from './table-profile/table-profile.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'page-profile',
    component: PageProfileComponent,
    children:[{
      path:'table-profile',
      component: TableProfileComponent,
    },{
      path: 'timer',
      component:TimerComponent
    }]
  },
  {
    path: 'forgot-password',
    component: ForgotPassComponent,
    children: [{
      path: 'dataOfUsers',
      component: DataOfUsersComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
