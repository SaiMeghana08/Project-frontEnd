import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './home/nav-bar/nav-bar';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBar, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'project';
}
