import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user = {
    id: 2,
    username: 'charlie',
    role: 'STUDENT'
  };

  constructor() { }

  getUserRole(): string {
    return this.user.role;
  }

  isAdmin(): boolean {
    return this.user.role === 'ADMIN';
  }

  isStudent(): boolean {
    return this.user.role === 'STUDENT';
  }
}
