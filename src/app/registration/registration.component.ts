import { Component, OnInit } from '@angular/core';
import { UsersService } from '../User.service';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup;

  constructor( private usersService:UsersService, private fb: FormBuilder, private router : Router) {};

  ngOnInit(){
    this.createForm();
  }
  createForm(){
    this.regForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    })
  }
  // onSubmit(user) {
  //   this.userService.addUser(user);
  //   this.router.navigate(['/profile']);
  // }
  onSubmit(user) {
    this.usersService.addUser(user);
    this.router.navigate(['/login'])
    }

}
