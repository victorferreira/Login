import { LoginService } from './login/login.service';
import { HttpModule } from '@angular/http'
import { SwService } from './sw/sw.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { ThfModule } from '@totvs/thf-web';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SwComponent } from './sw/sw.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SwComponent,
    MenuComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ThfModule,
    HttpModule
  ],
  providers: [SwService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
