import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderModule} from './components/header/header.module';

@NgModule({
    declarations: [AppComponent], // const ...
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HeaderModule], // impor ... from '...'
    exports: [], // module.export = {...}
    bootstrap: [AppComponent],
})
export class AppModule {}
