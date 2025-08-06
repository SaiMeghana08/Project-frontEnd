import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  role: string = 'STUDENT'; // Default role

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // If already logged in, redirect to home
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  login(): void {
    if (this.username) {
      this.authService.login(this.username, this.role);
      this.router.navigate(['/home']); // Redirect to home after successful login
    } else {
      alert('Please enter a username.');
    }
  }
}
