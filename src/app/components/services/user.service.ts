import { Injectable, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Users } from 'src/app/models/user.model';
@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  // private apiUrl: string = 'http://localhost:3000/users';
  private apiUrl: string = 'https://userdata-jsonserver.onrender.com/users';

  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  getUsers(): Observable<Users[]> {
    return this.http.get<any>(this.apiUrl);
  }
}
