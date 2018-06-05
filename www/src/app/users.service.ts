import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get('http://localhost:3000/api/users');
  }
  save(user) {
    return this.http.post('http://localhost:3000/api/users', user);
  }
}
