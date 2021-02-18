import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DatakeenComponent } from './datakeen.component';
const route : Routes = [{
  path:"",
  component:DatakeenComponent
}]
@NgModule({
  imports :[
   RouterModule.forChild(route)
  ],
  exports: [
    RouterModule
  ]
})
export class DatakeenRoutingModule{}
