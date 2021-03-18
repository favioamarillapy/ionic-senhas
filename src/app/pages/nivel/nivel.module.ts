import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NivelPage } from './nivel.page';

import { NivelPageRoutingModule } from './nivel-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NivelPageRoutingModule
  ],
  declarations: [NivelPage]
})
export class NivelPageModule { }
