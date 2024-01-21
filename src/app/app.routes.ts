import { Routes } from '@angular/router';
import {LoginComponent} from '../app/main-c/login/login.component'
import { RegisterComponent } from './main-c/register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];
