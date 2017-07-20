import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule }      from '@angular/core';

import { AppComponent } from './components/AppComponent';
import { AppRoutingModule }     from './AppRoutingModule';

@NgModule({
    imports:      [ AppRoutingModule, BrowserModule, HttpModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }