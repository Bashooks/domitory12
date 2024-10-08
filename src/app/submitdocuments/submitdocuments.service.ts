import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmitdocumentsService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  uploadMultiplePdfs(files: File[]): Observable<any> {
    const formData: FormData = new FormData();
    
    files.forEach(file => {
      formData.append('pdfs', file);  // คีย์ 'files' ตรงกับที่ Spring Boot คาดหวัง
    });

    // เรียก API ที่ URL สำหรับอัปโหลด PDF หลายไฟล์
    return this.http.post(this.baseUrl + '/dormitories/upload-pdfs', formData);
  }


  updateUrls(id: number, contractUrl: string, receiptUrl: string, folioUrl: string, status: string): Observable<any> {
    const urlUpdateRequest = {
      contractUrl: contractUrl,
      receiptUrl: receiptUrl,
      folioUrl: folioUrl,
      status : status
    };

    // เรียก API เพื่ออัปเดต contractUrl, receiptUrl, folioUrl
    return this.http.put(`${this.baseUrl}/dormitories/${id}/update-urls`, urlUpdateRequest);
  }
}
