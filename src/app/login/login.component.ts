import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {UsersService} from '../User.service';
import {LoginService} from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  logForm: FormGroup;
  users = [];

  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UsersService,
              private loginService: LoginService) { }


  ngOnInit() {
    this.createForm();
    this.users = this.userService.getAllUsers();
  }
  createForm(){
    this.logForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }


  onSubmit(formControls) {
    const isValidUser = this.loginService.validateUser(this.users, formControls);
    isValidUser ? this.router.navigate(['/page-profile']):
                      alert('Incorrect password or email');
  }

}
