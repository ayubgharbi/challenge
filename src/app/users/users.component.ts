import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  readonly ROOT_URL = 'https://reqres.in'

  users: any;

  constructor(private http: HttpClient, private user: UserService) {}

  ngOnInit() {
  }

  getUsers() {
    this.users = this.http.get(this.ROOT_URL + '/users?page=2')  
  }

}
