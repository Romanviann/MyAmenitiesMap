import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {StartComponent} from './start/start.component';
import {MapComponent} from './map/map.component';
import {AmenitiesComponent} from './amenities/amenities.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'start', component: StartComponent},
  { path: 'map', component: MapComponent},
  { path: 'amenities/:categories', component: AmenitiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
