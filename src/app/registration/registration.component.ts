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
      data: ['', [Validators.required, Validators.minLength(4)]],
      password:['', [Validators.required, Validators.minLength(3)]]
    })
  }

  onCreate(user) {
    this.usersService.addUser(user);
    if (user.data < 2000){
      alert('Registration is only allowed since 2000!')
    }
    this.router.navigate(['/login']);
  }

}
