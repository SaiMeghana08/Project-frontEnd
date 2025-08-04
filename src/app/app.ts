import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './home/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'project';
}
