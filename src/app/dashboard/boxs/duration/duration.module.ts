import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DurationPageRoutingModule } from './duration-routing.module';

import { DurationPage } from './duration.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DurationPageRoutingModule,
    SharedModule
  ],
  declarations: [DurationPage]
})
export class DurationPageModule {}
