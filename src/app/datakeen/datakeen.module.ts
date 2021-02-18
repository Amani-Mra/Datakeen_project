import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DatakeenComponent } from './datakeen.component';
import { DatakeenRoutingModule } from './datakeen-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations : [
        DatakeenComponent,
    ],
    imports : [
        CommonModule,
       DatakeenRoutingModule,
       AngularMaterialModule,
       FormsModule



    ],
    exports:[

    ]
})

export class DatakeenModule {

}
