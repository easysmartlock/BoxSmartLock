import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAccessPageRoutingModule } from './update-access-routing.module';

import { UpdateAccessPage } from './update-access.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateAccessPageRoutingModule
  ],
  declarations: [UpdateAccessPage]
})
export class UpdateAccessPageModule {}
