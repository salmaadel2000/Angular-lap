import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth, Student } from './_models/entity';

@Injectable({
  providedIn: 'root'
})
export class JWTService {
  private baseUrl = 'http://localhost:8080/login';
  private tokenKey = 'token'

  constructor(private http: HttpClient) { }

  getToken(student: Student): Observable<Auth> {
    return this.http.post<Auth>(this.baseUrl, student);
  }

  getTokenFromLocalStorage(): string | null {
    console.log(localStorage.getItem(this.tokenKey) )
    return localStorage.getItem(this.tokenKey); 
  }

  getCurrentStudentId(): string | null {
    return localStorage.getItem('id'); 
  }
}
