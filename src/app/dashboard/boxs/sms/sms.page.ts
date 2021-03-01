import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { BoxService } from 'src/app/services/box.service';
import { Response } from 'src/app/models/response.model';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.page.html',
  styleUrls: ['./sms.page.scss'],
})
export class SmsPage implements OnInit {

  id: string;
  loading = false;
  box: any;
  action: string;

  constructor(
    private service: BoxService,
    private route: ActivatedRoute,
    private alert: AlertService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.loading = true;
    this.box = null ;
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.find(this.id).then((output: Response) => {
      this.loading = false;
      if (output.etat === 'OK') {
        const data = output.data;
        if (Object.keys(data).length > 0) {
          this.box = data;
        }
      }
    })
    .catch((e) => {
      console.log(e);
      this.loading = false;
    });
  }

  valide() {
    this.service.editSMS(this.id, this.action).then((output: Response) => {
      if (output.etat === 'OK') {
        this.alert.presentAlert('Modification', '', 'Envoi SMS modifié');
      } else {
        this.alert.presentAlert('Modification', '', 'Une erreur est survenue');
      }
    })
    .catch((e) => {
      console.log(e);
      this.alert.presentAlert('Modification', '', 'Une erreur est survenue');
    });
  }

}
