import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgApexchartsModule} from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
    imports: [
        BrowserModule,
        NgApexchartsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
