import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  users: any;
  user: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.users = [];
  }

  public getUsers() {
    this.http.get('https://reqres.in/api/users').subscribe(res => {
      this.users = res["data"];
      // data contains actual array of users
    });
  }

  public createUsers() {
    this.http.post('https://reqres.in/api/users').subscribe(res => {
      this.user = res["data"];
      // data contains actual array of users
    });
  }
  
}
  

