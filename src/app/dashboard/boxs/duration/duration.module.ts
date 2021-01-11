import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DurationPageRoutingModule } from './duration-routing.module';

import { DurationPage } from './duration.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DurationPageRoutingModule
  ],
  declarations: [DurationPage]
})
export class DurationPageModule {}
