import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DelPhonePage } from './del-phone.page';

const routes: Routes = [
  {
    path: '',
    component: DelPhonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DelPhonePageRoutingModule {}
