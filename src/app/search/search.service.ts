import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl = 'http://localhost:8080/dormitories'; // URL ของ API ฝั่ง backend

  constructor(private http: HttpClient) { }


  getProvinces(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/api/provinces');
  }
}
