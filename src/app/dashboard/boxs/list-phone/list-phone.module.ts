import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPhonePageRoutingModule } from './list-phone-routing.module';

import { ListPhonePage } from './list-phone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPhonePageRoutingModule
  ],
  declarations: [ListPhonePage]
})
export class ListPhonePageModule {}
