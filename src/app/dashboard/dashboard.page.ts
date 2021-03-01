import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, PopoverController } from '@ionic/angular';
import { Response } from '../models/response.model';
import { BoxService } from '../services/box.service';
import { EasyService } from '../services/easy.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  options: any;
  loading: boolean;

  constructor(
    private popover: PopoverController,
    private actionSheetController: ActionSheetController,
    private boxService: BoxService,
    private router: Router,
    private easyService: EasyService
  ) { }

  ngOnInit() {
    this.loading = false;
  }

  listeBox() {
    this.loading = true;
    this.boxService.get().then(async (value: Response) => {
      if (value.etat === 'OK') {
        this.loading = false;
        const buttons = [];
        value.data.forEach(element => {
          buttons.push({
            text: '#' + element.id + ' - '  + element.nom,
            handler: () => {
              this.router.navigate(['/dashboard/box/' + element.id]);
            }
          });
        });
        const actionSheet = await this.actionSheetController.create({
          header: 'Box',
          cssClass: 'box-custom-class',
          buttons
        });
        await actionSheet.present();
      }
    })
    .catch((e) => {

    });
  }

  listeEasy(){
    this.loading = true;
    this.easyService.get().then(async (value: Response) => {
      if (value.etat === 'OK') {
        this.loading = false;
        const buttons = [];
        value.data.forEach(element => {
          buttons.push({
            text: '#' + element.id + ' - '  + element.nom,
            handler: () => {
              this.router.navigate(['/dashboard/easy/' + element.id]);
            }
          });
        });
        const actionSheet = await this.actionSheetController.create({
          header: 'Serrure',
          cssClass: 'box-custom-class',
          buttons
        });
        await actionSheet.present();
      }
    })
    .catch((e) => {

    });
  }

}
