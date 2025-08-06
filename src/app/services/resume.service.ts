import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  private storedResumeUrl: string | null = null; // Simulate backend storage

  constructor() {
    // Simulate fetching stored resume on service initialization
    // In a real app, this would be an HTTP call to your backend
    const savedResume = localStorage.getItem('userResume');
    if (savedResume) {
      this.storedResumeUrl = savedResume;
    }
  }

  uploadResume(file: File): Observable<string> {
    // Simulate API call to upload resume
    // In a real app, you would use HttpClient to send the file to your backend
    return new Observable<string>(observer => {
      const reader = new FileReader();
      reader.onload = () => {
        this.storedResumeUrl = reader.result as string;
        localStorage.setItem('userResume', this.storedResumeUrl); // Simulate persistence
        observer.next('Resume uploaded successfully!');
        observer.complete();
      };
      reader.onerror = () => {
        observer.error('Failed to read file.');
      };
      reader.readAsDataURL(file);
    }).pipe(delay(1000)); // Simulate network delay
  }

  getResume(): Observable<string | null> {
    // Simulate API call to get resume
    // In a real app, you would use HttpClient to fetch the resume URL from your backend
    return of(this.storedResumeUrl).pipe(delay(500)); // Simulate network delay
  }
}
