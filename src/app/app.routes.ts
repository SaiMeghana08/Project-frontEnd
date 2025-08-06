import { Routes } from '@angular/router';
import { Dashboard } from './home/dashboard/dashboard';
import { NavBar } from './home/nav-bar/nav-bar';
import { AboutUs } from './about-us/about-us';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Dashboard },
    { path: 'nav-bar', component: NavBar},
    { path: 'about-us', component: AboutUs }
];
