import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ScrollComponent } from './scroll/scroll.component';
import { Module1Module } from './module1/module1.module';
import { PracticeComponent } from './module1/practice/practice.component';
// import { NgxInfiniteScrollService } from 'ngx-infinite-scroll';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll/public-api';

@NgModule({
  declarations: [AppComponent, ScrollComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CKEditorModule,
    Module1Module,
    // InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
