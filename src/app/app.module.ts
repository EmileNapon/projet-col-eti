import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Example } from './authServices/Auth';


@NgModule({
  declarations: [
    AppComponent,
    Example,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Example],
  bootstrap: [AppComponent]
})
export class AppModule { }
