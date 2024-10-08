import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterDialogService {

  private apiUrl = 'http://localhost:8080/auth'; // เปลี่ยน URL นี้ให้ตรงกับ Backend ของคุณ

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    return this.http.post(this.apiUrl+'/register', userData);
  }
}
