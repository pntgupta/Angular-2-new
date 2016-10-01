import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import {AppComponent} from './app.component';
import {subcomponentComponent} from './sub-component.component';
import {localDataService} from './local-data.service';


@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule ],
  declarations: [ AppComponent, subcomponentComponent],
  bootstrap:    [ AppComponent ],
  providers: 	[ localDataService]
})
export class AppModule { }
