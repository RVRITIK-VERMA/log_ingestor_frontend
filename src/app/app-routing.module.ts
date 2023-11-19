import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogDataComponent } from './log-data-module/log-data/log-data.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component:LogDataComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    component:LogDataComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
