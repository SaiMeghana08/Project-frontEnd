import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add FormsModule to imports
  templateUrl: './profile.html'
})
export class Profile implements OnInit {
  userRole: string | null = null;
  editMode: boolean = false; // New property for edit mode

  studentDetails = {
    id: 1,
    user_id: 2,
    name: 'Charlie Student',
    branch: 'IT',
    cgpa: '8.5',
    batch_year: 2025,
    rollNo: 'STU12345', // Keeping existing fields for now, adjust as needed
    year: 'Final Year', // Keeping existing fields for now, adjust as needed
    gpa: '3.8/4.0', // Keeping existing fields for now, adjust as needed
    university: 'University of Technology', // Keeping existing fields for now, adjust as needed
    skills: ['Angular', 'TypeScript', 'Node.js', 'Python', 'SQL', 'Git', 'AWS'], // Keeping existing fields for now, adjust as needed
    projects: [ // Keeping existing fields for now, adjust as needed
      { name: 'E-commerce Platform', description: 'Developed a full-stack e-commerce application using Angular and Node.js.' },
      { name: 'Sentiment Analysis Tool', description: 'Built a Python-based tool for analyzing social media sentiment.' }
    ],
    internships: [ // Keeping existing fields for now, adjust as needed
      { company: 'Innovate Solutions', role: 'Software Intern', duration: 'Summer 2024' }
    ],
    email: 'alice.smith@example.com', // Keeping existing fields for now, adjust as needed
    phone: '+1 (555) 123-4567', // Keeping existing fields for now, adjust as needed
    linkedin: 'linkedin.com/in/alicesmith' // Keeping existing fields for now, adjust as needed
  };

  adminDetails = {
    id: 1,
    name: 'admin1',
    contact_email: 'hr@techcorp.com',
    added_by_admin_id: 1,
    employeeId: 'ADM987', // Keeping existing fields for now, adjust as needed
    jobTitle: 'Placement Coordinator', // Keeping existing fields for now, adjust as needed
    department: 'Career Services', // Keeping existing fields for now, adjust as needed
    yearsExperience: 10, // Keeping existing fields for now, adjust as needed
    responsibilities: ['Manage company relations', 'Coordinate placement drives', 'Student career counseling'], // Keeping existing fields for now, adjust as needed
    email: 'bob.johnson@example.com', // Keeping existing fields for now, adjust as needed
    phone: '+1 (555) 987-6543' // Keeping existing fields for now, adjust as needed
  };

  // Temporary variables for editing
  editableStudentName: string = '';
  editableStudentBranch: string = '';
  editableStudentCgpa: string = '';
  editableStudentBatchYear: number = 0;
  editableAdminName: string = '';
  editableAdminContactEmail: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userRole = this.authService.getUserRole();
    this.initializeEditableFields();
  }

  initializeEditableFields(): void {
    if (this.userRole === 'STUDENT') {
      this.editableStudentName = this.studentDetails.name;
      this.editableStudentBranch = this.studentDetails.branch;
      this.editableStudentCgpa = this.studentDetails.cgpa;
      this.editableStudentBatchYear = this.studentDetails.batch_year;
    } else if (this.userRole === 'ADMIN') {
      this.editableAdminName = this.adminDetails.name;
      this.editableAdminContactEmail = this.adminDetails.contact_email;
    }
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
    if (!this.editMode) {
      // If exiting edit mode without saving, revert changes
      this.initializeEditableFields();
    }
  }

  saveProfile(): void {
    if (this.userRole === 'STUDENT') {
      this.studentDetails.name = this.editableStudentName;
      this.studentDetails.branch = this.editableStudentBranch;
      this.studentDetails.cgpa = this.editableStudentCgpa;
      this.studentDetails.batch_year = this.editableStudentBatchYear;
      // In a real application, you would send this data to a backend API
      console.log('Student profile saved:', this.studentDetails);
    } else if (this.userRole === 'ADMIN') {
      this.adminDetails.name = this.editableAdminName;
      this.adminDetails.contact_email = this.editableAdminContactEmail;
      // In a real application, you would send this data to a backend API
      console.log('Admin profile saved:', this.adminDetails);
    }
    this.editMode = false; // Exit edit mode after saving
    alert('Profile updated successfully!');
  }
}
