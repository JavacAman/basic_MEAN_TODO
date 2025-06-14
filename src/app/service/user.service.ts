import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/api/';
  constructor(
    private http : HttpClient
  ) { }

  getUsersList() {
    return this.http.get(this.url + 'users');
  }

  createUser(data: any) {
    return this.http.post(this.url + 'users', data);
  }

  getUserById(id: string) {
    return this.http.get(this.url + 'users/' + id);
  }

  deleteUser(id: string) {
    return this.http.delete(this.url + 'users/' + id);
  }
}
