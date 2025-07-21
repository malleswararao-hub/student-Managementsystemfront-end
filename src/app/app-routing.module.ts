import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { StudentManagementSystemComponent } from './student-management-system/student-management-system.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'up1',component:UpdateComponent},
  {path:'updatefinal',component:UpdateComponent},
  {path:'student',component:StudentManagementSystemComponent},
  {path:'register',component:RegisterComponent},
  {path:'final',component:RegisterComponent},
  {path:'',component:AppComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
