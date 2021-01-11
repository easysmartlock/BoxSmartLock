import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/models/response.model';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.page.html',
  styleUrls: ['./pass.page.scss'],
})
export class PassPage implements OnInit {

  email: string;
  loading: boolean;

  constructor(
    private auth: AuthService,
    private alert: AlertService
  ) { }

  ngOnInit() {
    this.loading =  false;
  }

  do() {
    this.loading = true;
    this.auth.pass(this.email).then((output: Response) => {
      if (output.etat === 'OK') {
        this.email = '';
        this.alert.presentAlert('Mot de passe', '', 'Un email vous a été envoyé pour compléter le processus .');
      }
      this.loading = false;
    })
    .catch((error) => {
      console.log(error);
      this.alert.presentAlert('Mot de passe', '', 'Une erreur est survenue.');
      this.loading = false;
    });
  }
}
