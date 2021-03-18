import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GlosarioPage } from './glosario.page';

import { GlosarioPageRoutingModule } from './glosario-routing.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  entryComponents: [
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    GlosarioPageRoutingModule,
    PipesModule

  ],
  declarations: [GlosarioPage]
})
export class GlosarioPageModule { }
