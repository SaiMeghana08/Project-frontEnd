import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppliedJobsService, AppliedJob } from '../services/applied-jobs.service';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './companies.html'
})
export class Companies {
  constructor(private appliedJobsService: AppliedJobsService) {}

  companies = [
    {
      name: 'Tech Solutions Inc.',
      industry: 'Software Development',
      location: 'San Francisco, CA',
      description: 'A leading software company specializing in enterprise solutions.',
      jobs: ['Software Engineer', 'DevOps Engineer', 'UI/UX Designer'],
      isApplied: false
    },
    {
      name: 'Innovate Corp.',
      industry: 'FinTech',
      location: 'New York, NY',
      description: 'Revolutionizing financial services with cutting-edge technology.',
      jobs: ['Financial Analyst', 'Backend Developer', 'Data Scientist'],
      isApplied: false
    },
    {
      name: 'Global Connect',
      industry: 'Telecommunications',
      location: 'London, UK',
      description: 'Providing global communication services and network infrastructure.',
      jobs: ['Network Engineer', 'Customer Support Specialist', 'Project Manager'],
      isApplied: false
    },
    {
      name: 'Health Innovations',
      industry: 'Healthcare Technology',
      location: 'Boston, MA',
      description: 'Developing innovative solutions for healthcare providers and patients.',
      jobs: ['Biomedical Engineer', 'Frontend Developer', 'Product Manager'],
      isApplied: false
    }
  ];

  applyForJob(company: any) {
    company.isApplied = true;
    const appliedJob: AppliedJob = {
      companyName: company.name,
      industry: company.industry,
      location: company.location,
      jobTitle: company.jobs[0] || 'General Application', // Assuming first job or 'General Application'
      description: company.description
    };
    this.appliedJobsService.addAppliedJob(appliedJob);
  }
}
