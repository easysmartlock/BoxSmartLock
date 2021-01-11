import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DurationPage } from './duration.page';

const routes: Routes = [
  {
    path: ':id',
    component: DurationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DurationPageRoutingModule {}
