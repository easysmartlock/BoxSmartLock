import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage
  },
  {
    path: 'box',
    loadChildren: () => import('./box/box.module').then( m => m.BoxPageModule)
  },
  {
    path: 'add-phone',
    loadChildren: () => import('./boxs/add-phone/add-phone.module').then( m => m.AddPhonePageModule)
  },
  {
    path: 'del-phone',
    loadChildren: () => import('./boxs/del-phone/del-phone.module').then( m => m.DelPhonePageModule)
  },
  {
    path: 'access',
    loadChildren: () => import('./boxs/access/access.module').then( m => m.AccessPageModule)
  },
  {
    path: 'duration',
    loadChildren: () => import('./boxs/duration/duration.module').then( m => m.DurationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
