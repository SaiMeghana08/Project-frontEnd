import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any | null>(null);
  public currentUser: Observable<any | null> = this.currentUserSubject.asObservable();

  constructor(private router: Router) {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  public login(username: string, role: string): void {
    const user = { id: Date.now(), username, role };
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']); // Navigate to login page after logout
  }

  getUserRole(): string | null {
    return this.currentUserSubject.value ? this.currentUserSubject.value.role : null;
  }

  isAdmin(): boolean {
    return this.getUserRole() === 'ADMIN';
  }

  isStudent(): boolean {
    return this.getUserRole() === 'STUDENT';
  }

  isLoggedIn(): boolean {
    return this.currentUserSubject.value !== null;
  }
}
