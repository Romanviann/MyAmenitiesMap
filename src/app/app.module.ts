import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbToastrModule, NbIconModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import {NbSidebarService} from '@nebular/theme';
import { StartComponent } from './start/start.component';
import {LocationService} from './location.service';
import {config} from 'rxjs';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StartComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NbToastrModule.forRoot(config),
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbSidebarModule,
    NbButtonModule,
    NbIconModule
  ],
  providers: [NbSidebarService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
