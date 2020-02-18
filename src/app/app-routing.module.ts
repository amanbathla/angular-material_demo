import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Day1Component} from 'src/app/day1/day1.component';
import{StepperComponent } from 'src/app/stepper/stepper.component';
import{HomeComponent} from 'src/app/home/home.component';

const routes: Routes = [
  {path:'stepper',component:StepperComponent},
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
