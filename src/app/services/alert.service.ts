import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alert: AlertController
  ) { }

  async presentAlert(header: string, subHeader: string, message: string) {
    const alert = await this.alert.create({
      cssClass: 'alert-custom-class',
      header,
      subHeader,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
