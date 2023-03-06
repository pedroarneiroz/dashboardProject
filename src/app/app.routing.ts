import { InterpolationComponent } from './interpolation/interpolation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
  { path: 'interpolation', component: InterpolationComponent},
  { path: '', component: DashboardComponent}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);

