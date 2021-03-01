import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPhonePageRoutingModule } from './list-phone-routing.module';

import { ListPhonePage } from './list-phone.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPhonePageRoutingModule,
    SharedModule
  ],
  declarations: [ListPhonePage]
})
export class ListPhonePageModule {}
