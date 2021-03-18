import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubNivelPageRoutingModule } from './sub-nivel-routing.module';

import { SubNivelPage } from './sub-nivel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubNivelPageRoutingModule
  ],
  declarations: [SubNivelPage]
})
export class SubNivelPageModule {}
