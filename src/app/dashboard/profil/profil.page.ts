import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Response } from 'src/app/models/response.model';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  loading: boolean;
  data: any;

  constructor(
    private service: UserService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.data = {
      nom: '',
      prenom: '',
      email: ''
    };
  }

  ionViewDidEnter() {
    this.loading = true;
    this.service.get().then((value: Response) => {
      if (value.etat === 'OK') {
        console.log(value.data);
        this.data = value.data;
      }
      this.loading = false;
    })
    .catch((e) => {
      this.loading = false;
    });
  }

  do() {
    this.loading = true;
    this.service.post(this.data.nom, this.data.prenom).then((value: Response) => {
      if (value.etat === 'OK') {
        this.alert.presentAlert('Profil', '', 'Modification faite');
      }
      this.loading = false;
    })
    .catch(e => {
      this.alert.presentAlert('Profil', '', 'Une erreur est survenue');
      this.loading = false;
    });
  }

}
