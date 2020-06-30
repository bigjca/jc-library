import { JcLabelModule } from 'jc-library/jc-label';
import { JcTextModule}  from 'jc-library/jc-text';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JcLabelModule,
    JcTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
