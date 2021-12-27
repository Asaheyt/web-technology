import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {LibraryComponent} from './library/library.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ItemComponent} from './item/item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ProfileService} from "./profile/profile.service";
import {LoaderInterceptor} from "./loader/loader.interceptor";
import {LoaderComponent} from './loader/loader.component';
import {BreadcrumbModule} from "angular-crumbs";

@NgModule({
  declarations: [
    AppComponent,
    // MainComponent,
    // LibraryComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    // ItemComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BreadcrumbModule
  ],
  providers: [
    ProfileService, {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
