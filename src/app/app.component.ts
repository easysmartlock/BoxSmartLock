import { Component } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  prenom:string = '';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private router: Router,
    private user: UserService,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.login();
    });
  }

  logout() {
    this.menu.close('first');
    this.auth.clear().then(() => {
      this.router.navigate(['/home/connexion']);
    });
  }

  async login() {
    const token = await this.auth.get();
    if (token != null && token.value != null) {
      this.user.get().then((reponse) => {
        if (reponse.etat === 'OK') {
          const data = reponse.data;
          console.log(data);
          this.prenom = data.prenom;
        }
      });
    }
  }
}
