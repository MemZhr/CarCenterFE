import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CenterComponent } from './components/center/center.component';
import { CarsComponent } from './components/cars/cars.component';
import { OwnersComponent } from './components/owners/owners.component';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Error404Component } from './components/error-404/error-404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoadingComponent } from './components/loading/loading.component';
import { AddCenterComponent } from './components/add-center/add-center.component';
import { AddOwnerComponent } from './components/add-owner/add-owner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CenterComponent,
    CarsComponent,
    OwnersComponent,
    NavHeaderComponent,
    Error404Component,
    LoginComponent,
    LoadingComponent,
    AddCenterComponent,
    AddOwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
