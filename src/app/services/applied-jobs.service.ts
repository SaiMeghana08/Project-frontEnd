import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface AppliedJob {
  companyName: string;
  industry: string;
  location: string;
  jobTitle: string; // Assuming a company can have multiple jobs, we'll need to specify which one was applied for.
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppliedJobsService {
  private appliedJobsSubject = new BehaviorSubject<AppliedJob[]>([]);
  appliedJobs$: Observable<AppliedJob[]> = this.appliedJobsSubject.asObservable();

  constructor() {
    // Load applied jobs from local storage on initialization
    const storedJobs = localStorage.getItem('appliedJobs');
    if (storedJobs) {
      this.appliedJobsSubject.next(JSON.parse(storedJobs));
    }
  }

  addAppliedJob(job: AppliedJob) {
    const currentJobs = this.appliedJobsSubject.value;
    const updatedJobs = [...currentJobs, job];
    this.appliedJobsSubject.next(updatedJobs);
    localStorage.setItem('appliedJobs', JSON.stringify(updatedJobs));
  }

  getAppliedJobs(): AppliedJob[] {
    return this.appliedJobsSubject.value;
  }
}
