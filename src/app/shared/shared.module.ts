import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersionComponent } from './version/version.component';


@NgModule({
  declarations: [
    VersionComponent
  ],
  exports: [
    VersionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
