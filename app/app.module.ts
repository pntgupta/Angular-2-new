import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {subcomponentComponent} from './sub-component.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, subcomponentComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
