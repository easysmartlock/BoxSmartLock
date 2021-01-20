import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPhonePageRoutingModule } from './add-phone-routing.module';

import { AddPhonePage } from './add-phone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPhonePageRoutingModule
  ],
  declarations: [AddPhonePage]
})
export class AddPhonePageModule {}
