import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateUserDetailComponent } from './update-user-detail/update-user-detail.component';
export const router: Routes = [
  {path: '', component: LoginComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'userdetails', component: UpdateUserDetailComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
