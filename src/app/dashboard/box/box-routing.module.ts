import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoxPage } from './box.page';

const routes: Routes = [
  {
    path: ':id',
    component: BoxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoxPageRoutingModule {}
