import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from 'src/app/models/response.model';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  loading: boolean;
  email: string;
  password: string;
  hidden: boolean;

  constructor(
    private auth: AuthService,
    private alert: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loading = false;
    this.hidden = true;
  }

  do() {
    this.auth.connexion(this.email, this.password).then((value: Response) => {
      if (value.etat === 'OK') {
        const data = value.data;
        this.auth.set(data.token).then(() => {
          this.router.navigate(['/dashboard']);
        });
      } else {
        this.alert.presentAlert('Connexion', '', value.message);
      }
    })
    .catch((e) => {
      console.log(e);
      this.alert.presentAlert('Connexion', '', 'Une erreur est survenue');
    });
  }

}
