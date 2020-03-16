import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavModule } from '@parvathyg/nav';
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
    NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
