import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {StartComponent} from './start/start.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  { path: 'start', component: StartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
