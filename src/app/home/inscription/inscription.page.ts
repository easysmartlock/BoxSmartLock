import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Response } from 'src/app/models/response.model';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  public email: string;
  public password: string;
  public nom: string;
  public prenom: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert: AlertService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
  }

  do() {
    this.authService.inscription(
      this.email,
      this.password,
      this.nom,
      this.prenom
    ).then((val: Response) => {
      console.log(val);
      const data = val.data;
      if (val.etat === 'OK') {
        if (data) {
          this.authService.set(data).then(() => {
            this.router.navigateByUrl('/dashboard');
          });
        }
      } else {
        this.alert.presentAlert('Inscription', '', val.message);
      }
    })
    .catch((error) => {
      console.log(error);
      this.alert.presentAlert('Inscription', '', 'Une erreur est survenue');
    });
  }

}
