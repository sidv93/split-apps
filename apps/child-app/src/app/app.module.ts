import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationModule } from '@parvathyg/navigation';
import { ServicesModule } from '@parvathyg/services';
import { NavToolComponent } from './nav-tool/nav-tool.component';

@NgModule({
  declarations: [
    AppComponent,
    NavToolComponent
  ],
  imports: [
    BrowserModule,
    ServicesModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
