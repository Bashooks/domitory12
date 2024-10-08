import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetaildormitoryService {

  
  private apiUrl = 'http://localhost:8080/dormitories'; // URL ของ API ที่ใช้ใน Spring Boot

  constructor(private http: HttpClient) { }

  // เพิ่มเมธอดสำหรับการดึงข้อมูลหอพักตาม ID
  getDormitoryById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
