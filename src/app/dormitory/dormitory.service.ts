import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class DormitoryService {


  private apiUrl = 'http://localhost:8080/dormitories'; // URL ของ API ฝั่ง backend

  constructor(private http: HttpClient) { }

  // Method สำหรับการเรียกข้อมูลหอพักทั้งหมดจาก API
  getAllDormitories(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/available2');
  }

  getProvinces(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/api/provinces');
  }
}
