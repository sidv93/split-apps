import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ServicesModule } from '@parvathyg/services';
import { NavigationModule } from '@parvathyg/navigation';
import { ExternalComponent } from './external/external.component';

@NgModule({
  declarations: [
    AppComponent,
    ExternalComponent
  ],
  imports: [
    BrowserModule,
    NavigationModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
