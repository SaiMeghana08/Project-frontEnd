import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth.service';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxChartsModule, Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, NgxChartsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  userRole: string;
  contactForm: FormGroup;
  isFormVisible = true;

  // Chart options
  view: [number, number] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Branch';
  showYAxisLabel = true;
  yAxisLabel = 'Placement %';
  colorScheme: Color = {
    name: 'cool',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private authService: AuthService, private fb: FormBuilder) {
    this.userRole = this.authService.getUserRole();
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      // Here you would typically send the form data to a server
      this.contactForm.reset();
    }
  }

  toggleFormVisibility() {
    this.isFormVisible = !this.isFormVisible;
  }

  adminData = [
    { metric: 'Total Users', value: '1,250' },
    { metric: 'Active Users', value: '980' },
    { metric: 'Revenue', value: '$50,000' },
    { metric: 'Growth', value: '15%' },
    { metric: 'New Signups', value: '200' },
    { metric: 'Churn Rate', value: '2%' }
  ];

  userData = [
    { item: 'Recent Activity', details: 'Logged in successfully' },
    { item: 'Notifications', details: 'You have 3 new messages' },
    { item: 'My Tasks', details: 'Complete project report' },
    { item: 'Upcoming Deadlines', details: 'Submit resume by Friday' },
    { item: 'Recommended Jobs', details: 'Software Engineer at Google' }
  ];

  appliedJobs = [
    { company: 'Google', role: 'Software Engineer', status: 'Interviewing' },
    { company: 'Microsoft', role: 'Product Manager', status: 'Applied' },
    { company: 'Amazon', role: 'Data Scientist', status: 'Rejected' },
    { company: 'Netflix', role: 'Frontend Developer', status: 'Offer' }
  ];

  studentInfo = {
    name: 'Charlie',
    college: 'ABC University',
    major: 'Computer Science',
    graduationYear: 2025
  };

  announcements = [
    { title: 'Career Fair Next Week', date: '2025-08-10', content: 'Join us for the annual career fair in the main hall.' },
    { title: 'New Job Posting: Tech Inc.', date: '2025-08-08', content: 'Tech Inc. is hiring for a junior developer role.' }
  ];

  quickStats = [
    { label: 'Applications Sent', value: 12 },
    { label: 'Interviews Scheduled', value: 3 },
    { label: 'Offers Received', value: 1 }
  ];

  placementAnalytics = [
    { name: 'CORE', value: 85 },
    { name: 'AI-ML', value: 92 },
    { name: 'DS', value: 88 },
    { name: 'CS', value: 95 }
  ];

  industryPartners = [
    { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' },
    { name: 'Microsoft', logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
    { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png' },
    { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png' }
  ];
}
