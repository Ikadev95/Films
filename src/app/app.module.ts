import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main-components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { tokenInterceptor } from './auth/token.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideHttpClient( withInterceptors([tokenInterceptor])),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
