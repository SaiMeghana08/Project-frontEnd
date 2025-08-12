import { Routes } from '@angular/router';
import { Dashboard } from './home/dashboard/dashboard';
import { NavBar } from './home/nav-bar/nav-bar';
import { Resume } from './home/resume/resume';
import { Profile } from './profile/profile';
import { Companies } from './companies/companies'; // Import the Companies component
import { MyApplications } from './my-applications/my-applications';
import { LoginComponent } from './login/login';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Set login as default
    { path: 'login', component: LoginComponent },
    { path: 'home', component: Dashboard },
    { path: 'nav-bar', component: NavBar},
    { path: 'resume', component: Resume },
    { path: 'profile', component: Profile },
    { path: 'companies', component: Companies }, // Add the companies route
    { path: 'my-applications', component: MyApplications }
];
