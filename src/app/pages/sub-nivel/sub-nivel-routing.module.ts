import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubNivelPage } from './sub-nivel.page';

const routes: Routes = [
  {
    path: '',
    component: SubNivelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubNivelPageRoutingModule {}
