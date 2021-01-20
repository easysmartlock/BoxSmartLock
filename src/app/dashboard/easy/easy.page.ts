import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EasyService } from 'src/app/services/easy.service';
import { Response } from 'src/app/models/response.model';

@Component({
  selector: 'app-easy',
  templateUrl: './easy.page.html',
  styleUrls: ['./easy.page.scss'],
})
export class EasyPage implements OnInit {

  id: string;
  easy: any;
  loading: boolean;
  actions: any = EasyService.actions;
  action: string;


  constructor(
    private route: ActivatedRoute,
    private service: EasyService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.loading = true;
    this.easy = null ;
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.find(this.id).then((output: Response) => {
      this.loading = false;
      if (output.etat === 'OK') {
        const data = output.data;
        if (Object.keys(data).length > 0) {
          this.easy = data;
        }
      }
    })
    .catch((e) => {

    });
  }

  valide() {
    if (this.action === this.actions.actionAjoutTel) {
      this.router.navigate(['/dashboard/easy/add-phone/' + this.id]);
    }
    if (this.action === this.actions.actionAccess) {
      this.router.navigate(['/dashboard/easy/update-access/' + this.id]);
    }
    if (this.action === this.actions.actionDuration) {
      this.router.navigate(['/dashboard/easy/duration/' + this.id]);
    }
    if (this.action === this.actions.actionListeTel) {
      this.loading = true;
      this.service.requestListPhone(this.id).then(() => {
        this.loading = false;
        this.router.navigate(['/dashboard/easy/list-phone/' + this.id]);
      })
      .catch((e) => {
        this.loading = false;
      });
    }
  }

}
