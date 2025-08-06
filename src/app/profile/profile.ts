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
    name: 'Alice Smith',
    rollNo: 'STU12345',
    branch: 'Computer Science',
    year: 'Final Year',
    gpa: '3.8/4.0',
    university: 'University of Technology',
    skills: ['Angular', 'TypeScript', 'Node.js', 'Python', 'SQL', 'Git', 'AWS'],
    projects: [
      { name: 'E-commerce Platform', description: 'Developed a full-stack e-commerce application using Angular and Node.js.' },
      { name: 'Sentiment Analysis Tool', description: 'Built a Python-based tool for analyzing social media sentiment.' }
    ],
    internships: [
      { company: 'Innovate Solutions', role: 'Software Intern', duration: 'Summer 2024' }
    ],
    email: 'alice.smith@example.com',
    phone: '+1 (555) 123-4567',
    linkedin: 'linkedin.com/in/alicesmith'
  };

  adminDetails = {
    name: 'Bob Johnson',
    employeeId: 'ADM987',
    jobTitle: 'Placement Coordinator',
    department: 'Career Services',
    yearsExperience: 10,
    responsibilities: ['Manage company relations', 'Coordinate placement drives', 'Student career counseling'],
    email: 'bob.johnson@example.com',
    phone: '+1 (555) 987-6543'
  };

  // Temporary variables for editing
  editableStudentName: string = '';
  editableStudentEmail: string = '';
  editableStudentSkills: string = '';
  editableAdminName: string = '';
  editableAdminEmail: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userRole = this.authService.getUserRole();
    this.initializeEditableFields();
  }

  initializeEditableFields(): void {
    if (this.userRole === 'STUDENT') {
      this.editableStudentName = this.studentDetails.name;
      this.editableStudentEmail = this.studentDetails.email;
      this.editableStudentSkills = this.studentDetails.skills.join(', ');
    } else if (this.userRole === 'ADMIN') {
      this.editableAdminName = this.adminDetails.name;
      this.editableAdminEmail = this.adminDetails.email;
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
      this.studentDetails.email = this.editableStudentEmail;
      this.studentDetails.skills = this.editableStudentSkills.split(',').map(s => s.trim());
      // In a real application, you would send this data to a backend API
      console.log('Student profile saved:', this.studentDetails);
    } else if (this.userRole === 'ADMIN') {
      this.adminDetails.name = this.editableAdminName;
      this.adminDetails.email = this.editableAdminEmail;
      // In a real application, you would send this data to a backend API
      console.log('Admin profile saved:', this.adminDetails);
    }
    this.editMode = false; // Exit edit mode after saving
    alert('Profile updated successfully!');
  }
}
