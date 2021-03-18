import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'sub-nivel/:nivel',
    loadChildren: () => import('./pages/sub-nivel/sub-nivel.module').then(m => m.SubNivelPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'juego/:sub-nivel',
    loadChildren: () => import('./pages/juego/juego.module').then(m => m.JuegoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'glosario-info/:id',
    loadChildren: () => import('./pages/glosario-info/glosario-info.module').then(m => m.GlosarioInfoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'glosario-info',
    loadChildren: () => import('./pages/glosario-info/glosario-info.module').then(m => m.GlosarioInfoPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
