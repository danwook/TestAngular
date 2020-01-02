import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {BookSearchMainComponent} from './book-search/book-search-main/book-search-main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookSearchMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
