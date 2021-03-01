import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VersionComponent } from './version/version.component';
import { VerComponent } from './ver/ver.component';
import { UnlockerComponent } from './unlocker/unlocker.component';


@NgModule({
  declarations: [
    VersionComponent,
    VerComponent,
    UnlockerComponent
  ],
  exports: [
    VersionComponent,
    VerComponent,
    UnlockerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
