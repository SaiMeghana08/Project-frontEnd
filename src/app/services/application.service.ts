import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private baseUrl = 'http://localhost:8080/students'; // Assuming your backend runs on 8080 and the endpoint is /students/{id}/applications

  constructor(private http: HttpClient) { }

  getApplicationsByStudentId(studentId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${studentId}/applications`);
  }
}
