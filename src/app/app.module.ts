import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AuthguardGuard } from './authguard.guard';
import { UserService } from './user.service';
import { HeaderComponent } from './header/header.component'

const appRoutes:Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    canActivate: [AuthguardGuard],
    component: UsersComponent
  },
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsersComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
