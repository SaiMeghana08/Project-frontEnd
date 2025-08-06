import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppliedJobsService, AppliedJob } from '../services/applied-jobs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-applications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-applications.html',
  styleUrls: ['./my-applications.css']
})
export class MyApplications implements OnInit {
  appliedJobs$: Observable<AppliedJob[]>;

  constructor(private appliedJobsService: AppliedJobsService) {
    this.appliedJobs$ = this.appliedJobsService.appliedJobs$;
  }

  ngOnInit(): void {
    // No specific initialization needed here as the service handles loading from local storage
  }
}
