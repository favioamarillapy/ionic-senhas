import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlosarioInfoPageRoutingModule } from './glosario-info-routing.module';

import { GlosarioInfoPage } from './glosario-info.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlosarioInfoPageRoutingModule,
    PipesModule
  ],
  declarations: [GlosarioInfoPage]
})
export class GlosarioInfoPageModule {}
