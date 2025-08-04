
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,FormsModule, CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
   // Hardcoded user simulation
  user = {
    id: 2,
    username: 'charlie',
    role: 'STUDENT' 
  };

  constructor() {}

  ngOnInit(): void {}

  isAdmin(): boolean {
    return this.user.role === 'ADMIN';
  }

  isStudent(): boolean {
    return this.user.role === 'STUDENT';
  }

  logout(): void {
    console.log("Logging out...");
    // redirect or clear localStorage here
  }
}
