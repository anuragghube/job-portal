import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobFilterComponent } from './module/job-filter/job-filter.component';
import { JobListComponent } from './module/job-list/job-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: JobListComponent },
  { path: '**', component: JobFilterComponent } // If no matching route found, go back to home route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
