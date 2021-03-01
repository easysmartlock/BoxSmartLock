import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Device } = Plugins;

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.scss'],
})
export class VerComponent implements OnInit {

  info: any;

  constructor() { }

  async ngOnInit() {
    this.info = await Device.getInfo();
    if (this.info.appVersion === '') {
      this.info.appVersion = '1.3' ;
    }
  }

}
