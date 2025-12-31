import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './guards/auth.guard';
import { Upload } from './upload/upload';
import { Documents } from './documents/documents';


export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard]   
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
  path: 'upload',
  component: Upload,
  canActivate: [authGuard]   
},
{
  path: 'documents',
  component: Documents,
  canActivate: [authGuard]
}

];
