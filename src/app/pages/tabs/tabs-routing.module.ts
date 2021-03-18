import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'nivel',
        loadChildren: () => import('../nivel/nivel.module').then(m => m.NivelPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'glosario',
        loadChildren: () => import('../glosario/glosario.module').then(m => m.GlosarioPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'mas',
        loadChildren: () => import('../mas/mas.module').then(m => m.MasPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: '/tabs/nivel',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/nivel',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
