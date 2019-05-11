import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { EnglishComponent } from './english/english.component';
import { SwedishComponent } from './swedish/swedish.component';
import { NorwegianComponent } from './norwegian/norwegian.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EnglishComponent,
    SwedishComponent,
    NorwegianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
