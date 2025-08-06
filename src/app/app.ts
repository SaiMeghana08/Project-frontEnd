import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './home/nav-bar/nav-bar';
import { FooterComponent } from './footer/footer';
import { AuthService } from './auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBar, FooterComponent, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'project';

  constructor(public authService: AuthService) {}
}
