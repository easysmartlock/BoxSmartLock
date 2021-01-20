import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPhonePage } from './list-phone.page';

const routes: Routes = [
  {
    path: ':id',
    component: ListPhonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPhonePageRoutingModule {}
