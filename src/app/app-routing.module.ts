import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatakeenModule } from './datakeen/datakeen.module';

export function loadDatakeenModule() {return DatakeenModule}

export const routes: Routes = [
  {path: '',

  children: [
    {
      path: 'datakeen',
      loadChildren: loadDatakeenModule,
      data: {
        title: 'Datakeen',
        breadcrumbs: 'Datakeen'
      }
    },
]
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
