import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { BoxService } from 'src/app/services/box.service';
import { Response } from 'src/app/models/response.model';

@Component({
  selector: 'app-access',
  templateUrl: './access.page.html',
  styleUrls: ['./access.page.scss'],
})
export class AccessPage implements OnInit {

  box: any;
  id: string;
  loading: boolean;
  action: string;

  constructor(
    private service: BoxService,
    private route: ActivatedRoute,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.loading = false;
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
    if (this.action !== null) {
      this.loading = true;
      this.service.editAccess(this.id, this.action).then((output: Response) => {
        this.loading = false;
        if (output.etat === 'OK') {
          if (output.data === true) {
            this.alert.presentAlert('Modification', '', 'Access modifier sur la Box');
          } else {
            this.alert.presentAlert('Modification', '', 'Une erreur est survenue');
          }
        }
      })
      .catch((e) => {
        console.log(e);
        this.loading = false;
        this.alert.presentAlert('Modification', '', 'Une erreur est survenue');
      });
    }
  }
}
