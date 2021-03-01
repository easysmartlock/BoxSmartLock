import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoxPageRoutingModule } from './box-routing.module';

import { BoxPage } from './box.page';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSlideUnlockModule } from 'ngx-slide-unlock';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoxPageRoutingModule,
    SharedModule,
    NgxSlideUnlockModule
  ],
  declarations: [BoxPage],
  providers: [
    CallNumber
  ]
})
export class BoxPageModule {}
