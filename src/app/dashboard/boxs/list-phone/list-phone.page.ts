import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { BoxService } from 'src/app/services/box.service';
import { Response } from 'src/app/models/response.model';

@Component({
  selector: 'app-list-phone',
  templateUrl: './list-phone.page.html',
  styleUrls: ['./list-phone.page.scss'],
})
export class ListPhonePage implements OnInit {

  id: string;
  loading = false;
  box: any;
  phones: any[];

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
    this.phones = [];
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
      this.loading = false;
    });
    this.load();
  }

  load() {
    this.service.getPhones(this.id).then((output: Response) => {
      this.loading = false;
      if (output.etat === 'OK') {
        this.phones = output.data;
      }
    })
    .catch((e) => {
      this.loading = false;
    });
  }

  remove(id) {
    this.loading = true;
    this.service.remove(this.id, id).then((output: Response) => {
      this.loading = false;
      this.load();
    })
    .catch((e) => {
      this.loading = false;
    });
  }

}
