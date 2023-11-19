import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LogDataModuleModule } from './log-data-module/log-data-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LogDataModuleModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      maxOpened:1,
      autoDismiss:true
    }),

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
