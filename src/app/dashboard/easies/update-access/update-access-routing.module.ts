import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateAccessPage } from './update-access.page';

const routes: Routes = [
  {
    path: ':id',
    component: UpdateAccessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateAccessPageRoutingModule {}
