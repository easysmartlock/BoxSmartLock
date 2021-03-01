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
  },
  {
    path: 'list-phone',
    loadChildren: () => import('./boxs/list-phone/list-phone.module').then( m => m.ListPhonePageModule)
  },
  {
    path: 'easy',
    loadChildren: () => import('./easy/easy.module').then( m => m.EasyPageModule)
  },
  {
    path: 'easy/add-phone',
    loadChildren: () => import('./easies/add-phone/add-phone.module').then( m => m.AddPhonePageModule)
  },
  {
    path: 'easy/update-access',
    loadChildren: () => import('./easies/update-access/update-access.module').then( m => m.UpdateAccessPageModule)
  },
  {
    path: 'easy/duration',
    loadChildren: () => import('./easies/duration/duration.module').then( m => m.DurationPageModule)
  },
  {
    path: 'easy/list-phone',
    loadChildren: () => import('./easies/list-phone/list-phone.module').then( m => m.ListPhonePageModule)
  },
  {
    path: 'sms',
    loadChildren: () => import('./boxs/sms/sms.module').then( m => m.SmsPageModule)
  },
  {
    path: 'easy/sms',
    loadChildren: () => import('./easies/sms/sms.module').then( m => m.SmsPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
