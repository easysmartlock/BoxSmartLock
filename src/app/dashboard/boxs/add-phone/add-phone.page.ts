import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoxService } from 'src/app/services/box.service';
import { Response } from 'src/app/models/response.model';
import { AlertService } from 'src/app/services/alert.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.page.html',
  styleUrls: ['./add-phone.page.scss'],
})
export class AddPhonePage implements OnInit {

  box: any;
  loading: boolean = false;
  id: string;
  unlimited: boolean = true;
  debut: any = new Date();
  fin: any = new Date();
  prefix: string;
  telephone: string;
  min: string;

  constructor(
    private service: BoxService,
    private route: ActivatedRoute,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.min = moment().format('YYYY-MM-DD');
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

    });
  }

  valide() {
    if (this.prefix.indexOf('+') !== 0) {
      this.alert.presentAlert('Erreur', '', 'Le préfix téléphonique doit commencé par +');
      return;
    }
    if (this.telephone.indexOf('0') === 0) {
      this.alert.presentAlert('Erreur', '', 'Le numéro de téléphone ne doit pas commencé par 0');
      return;
    }
    this.loading = true;
    this.service.addPhone(
      this.id,
      this.unlimited,
      this.debut,
      this.fin,
      this.prefix,
      this.telephone
    ).then((output: Response) => {
      this.loading = false;
      if (output.etat === 'OK') {
        if (output.data === true) {
          this.alert.presentAlert('Ajout', '', 'Numéro ajouté a la BoxSmartLock');
        } else {
          this.alert.presentAlert('Erreur', '', 'Ajout annulé , une erreur est survenue');
        }
      }
    })
    .catch((e) => {
      console.log(e);
      this.loading = false;
      this.alert.presentAlert('Erreur', '', 'Ajout annulé , une erreur est survenue');
    });
  }

}
