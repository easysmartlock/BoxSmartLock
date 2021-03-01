import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPhonePageRoutingModule } from './add-phone-routing.module';

import { AddPhonePage } from './add-phone.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPhonePageRoutingModule,
    SharedModule
  ],
  declarations: [AddPhonePage]
})
export class AddPhonePageModule {}
