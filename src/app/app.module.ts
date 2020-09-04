import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobFilterComponent } from './module/job-filter/job-filter.component';
import { JobListComponent } from './module/job-list/job-list.component';

@NgModule({
  declarations: [
    AppComponent,
    JobFilterComponent,
    JobListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
