import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf
import { SafeUrlPipe } from '../../pipes/safe-url.pipe'; // Import the SafeUrlPipe
import { ResumeService } from '../../services/resume.service'; // Import ResumeService

@Component({
  selector: 'app-resume',
  standalone: true, // Mark as standalone
  imports: [CommonModule, SafeUrlPipe], // Add CommonModule and SafeUrlPipe to imports
  templateUrl: './resume.html'
})
export class Resume implements OnInit {
  resumeUrl: string | ArrayBuffer | null = null;
  uploading: boolean = false;
  uploadSuccess: boolean = false;
  showUploadSection: boolean = true; // New flag to control visibility of upload section

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.resumeService.getResume().subscribe(url => {
      this.resumeUrl = url;
      this.showUploadSection = !url; // Hide upload section if resume is already present
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file.type === 'application/pdf') {
        this.uploading = true;
        this.uploadSuccess = false;
        this.resumeService.uploadResume(file).subscribe({
          next: (message) => {
            console.log(message);
            this.resumeUrl = localStorage.getItem('userResume'); // Get from simulated storage
            this.uploading = false;
            this.uploadSuccess = true;
            this.showUploadSection = false; // Hide upload section after successful upload
          },
          error: (err) => {
            alert('Failed to upload resume: ' + err);
            this.uploading = false;
            this.uploadSuccess = false;
            this.showUploadSection = true; // Show upload section on error
          }
        });
      } else {
        alert('Please select a PDF file.');
        this.resumeUrl = null;
        this.uploadSuccess = false;
        this.showUploadSection = true; // Show upload section if wrong file type
      }
    }
  }

  changeResume(): void {
    this.showUploadSection = true; // Show upload section to allow changing resume
    this.uploadSuccess = false; // Reset upload success message
  }
}
