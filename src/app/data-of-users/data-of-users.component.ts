import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-of-users',
  templateUrl: './data-of-users.component.html',
  styleUrls: ['./data-of-users.component.scss']
})
export class DataOfUsersComponent implements OnInit {

  userName: string;
  userEmail;

  constructor() {
  }

  ngOnInit() {
    this.userEmail = JSON.parse(localStorage.getItem('user')).email;
    this.userName = JSON.parse(localStorage.getItem('user')).name;
    console.log(this.userEmail)
    console.log(this.userName)
  }

}
