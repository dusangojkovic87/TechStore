import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderPhoneNumberComponent } from './components/header-phone-number/header-phone-number.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderPhoneNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
