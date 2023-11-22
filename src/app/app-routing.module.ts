import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenterComponent } from './components/center/center.component';
import { Error404Component } from './components/error-404/error-404.component';
import { HomeComponent } from './components/home/home.component';
import { OwnersComponent } from './components/owners/owners.component';
import { CarsComponent } from './components/cars/cars.component';
import { LoginComponent } from './components/login/login.component';
import { AddCenterComponent } from './components/add-center/add-center.component';
import { AddOwnerComponent } from './components/add-owner/add-owner.component';
import { AuthGuardService } from './service/auth-guard-service.service';

const routes: Routes = [
  {path: '',component:HomeComponent},
{path:'home',canActivate: [AuthGuardService], component:HomeComponent},
  {path:'center',canActivate: [AuthGuardService],component:CenterComponent},
  {path:'owners',canActivate: [AuthGuardService],component:OwnersComponent},
  {path:'cars',canActivate: [AuthGuardService],component:CarsComponent},
  {path:'login',component:LoginComponent},
  {path:'addcenter',canActivate: [AuthGuardService],component:AddCenterComponent},
  {path:'addowner',canActivate: [AuthGuardService],component:AddOwnerComponent},
  {path:'**',component:Error404Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
