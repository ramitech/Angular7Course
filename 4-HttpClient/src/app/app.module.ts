import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FatwaListComponent } from './fatwa-list/fatwa-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddFatwaComponent } from './add-fatwa/add-fatwa.component';

@NgModule({
  declarations: [
    AppComponent,
    FatwaListComponent,
    AddFatwaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
