import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginDialogService {
  private apiUrl = 'http://localhost:8080/auth'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);
  
      return this.http.post(this.apiUrl + '/login', {}, { params, responseType: 'text' });
  }
}
