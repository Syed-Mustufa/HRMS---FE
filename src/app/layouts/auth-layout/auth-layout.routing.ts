import { Routes } from '@angular/router';

import { LoginComponent } from '../../pages/auth-pages/login/login.component';
import { RegisterComponent } from '../../pages/auth-pages/register/register.component';
import { LoggedInGuard } from 'src/app/auth/logged-in.guard';
import { ForgotPasswordComponent } from 'src/app/pages/auth-pages/forgot-password/forgot-password.component';

export const AuthLayoutRoutes: Routes = [
    { path: 'login',          component: LoginComponent, canActivate:[LoggedInGuard] },
    { path: 'register',       component: RegisterComponent, canActivate:[LoggedInGuard] },
    { path: 'forgot-password', component: ForgotPasswordComponent , canActivate:[LoggedInGuard] }
];
