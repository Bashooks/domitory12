import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  private apiUrl = 'http://localhost:8080'; // เปลี่ยนเป็น URL ของ API ที่แท้จริง

  constructor(private http: HttpClient) { }

  updatePerson(id: number, person: any): Observable<any> {

    return this.http.put<any>(`${this.apiUrl + '/auth/update'}/${id}`, person);
  }
}
