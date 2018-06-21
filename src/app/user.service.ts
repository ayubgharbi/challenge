import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly ROOT_URL = 'https://reqres.in/api';

  private isUserLoggedIn;

  
  constructor(private http: HttpClient) { 
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn() {
      this.isUserLoggedIn = true;
  }

  getUserLoggedIn() {
    return this.isUserLoggedIn; 
  }

  getUser(id: number): Observable<User> {
    const url = `${this.ROOT_URL}/${id}`;
    return this.http.get<User>(url)
  }

  addUser (user: User): Observable<User> {
    return this.http.post<User>(this.ROOT_URL + '/users', user, httpOptions)
  }

  updateUser (user: User): Observable<any> {
    return this.http.put(this.ROOT_URL + '/users', user, httpOptions)
  }
}
