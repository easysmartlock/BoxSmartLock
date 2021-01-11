import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DelPhonePageRoutingModule } from './del-phone-routing.module';

import { DelPhonePage } from './del-phone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DelPhonePageRoutingModule
  ],
  declarations: [DelPhonePage]
})
export class DelPhonePageModule {}
