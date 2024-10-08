import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumenttrackingService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getDocumentById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/dormitories/person/${id}`);
  }

  getDocumentAll(): Observable<any> {
    return this.http.get(`${this.baseUrl+'/dormitories/available'}`);
  }

  downloadDocument(id: number): Observable<Blob> {
    return this.http.get(`${this.baseUrl+'/download'}/${id}`, { responseType: 'blob' });
  }

  updateDocumentStatus(dormitoryId: number, status: string): Observable<any> {
    const params = new HttpParams().set('status', status);
    return this.http.put(`${this.baseUrl}/dormitories/${dormitoryId}/status`, {}, { params });
  }

  delete(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/dormitories/${id}`);
  }
   
}
