import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { ThfModule } from '@totvs/thf-web';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ThfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
