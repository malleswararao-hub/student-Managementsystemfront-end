import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './update/update.component';
import { StudentManagementSystemComponent } from './student-management-system/student-management-system.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'up1',component:UpdateComponent},
  {path:'updatefinal',component:UpdateComponent},
  {path:'student',component:StudentManagementSystemComponent},
  {path:'register',component:RegisterComponent},
  {path:'final',component:RegisterComponent},
  {path:'',component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
