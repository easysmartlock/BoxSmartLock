import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from 'src/app/models/response.model';
import { BoxService } from 'src/app/services/box.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.page.html',
  styleUrls: ['./box.page.scss'],
})
export class BoxPage implements OnInit {

  id: string;
  box: any;
  loading: boolean;
  actions: any = BoxService.actions;
  action: string;

  constructor(
    private route: ActivatedRoute,
    private service: BoxService,
    private router: Router
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
    if (this.action === this.actions.actionAjoutTel) {
      this.router.navigate(['/dashboard/add-phone/' + this.id]);
    }
    if (this.action === this.actions.actionAccess) {
      this.router.navigate(['/dashboard/access/' + this.id]);
    }
    if (this.action === this.actions.actionDuration) {
      this.router.navigate(['/dashboard/duration/' + this.id]);
    }
  }
}
