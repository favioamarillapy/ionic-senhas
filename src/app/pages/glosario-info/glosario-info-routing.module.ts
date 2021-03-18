import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlosarioInfoPage } from './glosario-info.page';

const routes: Routes = [
  {
    path: '',
    component: GlosarioInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlosarioInfoPageRoutingModule {}
