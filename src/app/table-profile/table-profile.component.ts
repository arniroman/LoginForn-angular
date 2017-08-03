import { Component, OnInit } from '@angular/core';
import { UsersService } from '../User.service';

@Component({
  selector: 'app-table-profile',
  templateUrl: './table-profile.component.html',
  styleUrls: ['./table-profile.component.scss']
})
export class TableProfileComponent implements OnInit {
  users;
  letters;
  constructor(private usersService:UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getAllUsers();
  }

}
