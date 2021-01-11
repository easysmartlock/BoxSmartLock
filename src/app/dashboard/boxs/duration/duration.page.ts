import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { BoxService } from 'src/app/services/box.service';
import { Response } from 'src/app/models/response.model';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.page.html',
  styleUrls: ['./duration.page.scss'],
})
export class DurationPage implements OnInit {

  box: any = null ;
  loading = false;
  id: any;
  duration = '';

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

    });
  }

  valide() {
    if (this.duration !== '') {
      this.service.editDuration(this.id, this.duration).then((output: Response) => {
        if (output.etat === 'OK') {
          this.alert.presentAlert('Modification', '', 'La durée ouverture a bien été modifié');
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

}
