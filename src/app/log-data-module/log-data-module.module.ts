import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogDataModuleRoutingModule } from './log-data-module-routing.module';
import { LogDataComponent } from './log-data/log-data.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    LogDataComponent
  ],
  imports: [
    CommonModule,
    LogDataModuleRoutingModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
  ]
})
export class LogDataModuleModule { }
