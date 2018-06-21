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
import { HeaderComponent } from './header/header.component';
import { UserDetailComponent } from './user-detail/user-detail.component'
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

const appRoutes:Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    canActivate: [AuthguardGuard],
    component: UsersComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  
  {
    path: 'detail/:id',
    component: UserDetailComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsersComponent,
    HeaderComponent,
    UserDetailComponent,
    FooterComponent, 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule, 
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
