import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
 
  readonly ROOT_URL = 'https://reqres.in/api';

  users: User[];

  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit() {
    this.users = [];
  }

  public getUsers() {
    this.http.get(this.ROOT_URL + '/users?page=1').subscribe(res => {
      this.users = res["data"];
      // data contains actual array of users
    });
  }

  add(firstName: string, lastName: string, avatar: string): void {
    var first_name = firstName.trim();
    var last_name = lastName.trim();
    var avatar = avatar.trim();
    this.userService.addUser({ first_name, last_name, avatar } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }
}
  

