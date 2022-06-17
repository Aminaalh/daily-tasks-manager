import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NewListComponent } from './pages/new-list/new-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { WebReqInterceptor } from './web-req.interceptor';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { Page404Component } from './pages/page404/page404.component';
import { Page401Component } from './pages/page401/page401.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewListComponent,
    LoginPageComponent,
    SignupPageComponent,
    WelcomePageComponent,
    EditTaskComponent,
    Page404Component,
    Page401Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    FormsModule, 
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true },
    DatePipe,
    EditTaskComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
