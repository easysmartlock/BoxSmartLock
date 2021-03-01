import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Device } = Plugins;


@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss'],
})
export class VersionComponent implements OnInit {

  info: any;

  constructor() {
  }

  ngOnInit() {
  }

}
