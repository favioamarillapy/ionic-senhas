import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MasPage } from './mas.page';

import { MasPageRoutingModule } from './mas-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: MasPage }]),
    MasPageRoutingModule,
  ],
  declarations: [MasPage]
})
export class MasPageModule { }
