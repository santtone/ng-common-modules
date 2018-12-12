import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginLibModule} from '../../projects/login-lib/src/lib/login-lib.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
