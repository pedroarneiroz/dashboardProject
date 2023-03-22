import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from './pages/interpolation/interpolation.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'DataBinding', component: DataBindingComponent },
  { path: 'DataBinding', component: DataBindingComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule]

})

export class AppRoutingModule {}
