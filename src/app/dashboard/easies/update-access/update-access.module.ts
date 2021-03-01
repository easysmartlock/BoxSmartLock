import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateAccessPageRoutingModule } from './update-access-routing.module';

import { UpdateAccessPage } from './update-access.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateAccessPageRoutingModule,
    SharedModule
  ],
  declarations: [UpdateAccessPage]
})
export class UpdateAccessPageModule {}
