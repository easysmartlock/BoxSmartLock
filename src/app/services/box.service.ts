import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environnements/environnement';
import { Response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  static readonly actions = {
    actionAjoutTel: 'action_ajout_tel',
    actionSuppressionTel: 'action_suppression_tel',
    actionAccess: 'access',
    actionDuration: 'duration',
    actionListeTel: 'liste_tel',
    actionSMS: 'sms'
  };

  constructor(
    private http: HttpClient
  ) { }

  get(): Promise<Response> {
    return this.http.get<Response>(`${environment.apiUrl}/boxes`).toPromise();
  }

  find(id): Promise<Response> {
    return this.http.get<Response>(`${environment.apiUrl}/boxes/${id}`).toPromise();
  }

  remove(id, phoneId): Promise<Response> {
    return this.http.post<Response>(`${environment.apiUrl}/boxes/delete-phone`, {
      id,
      phoneId
    }).toPromise();
  }

  addPhone(
    nom: string,
    id: string,
    unlimited: boolean,
    debut: any ,
    fin: any ,
    prefix: string,
    telephone: string,
    ordre: string): Promise<Response>
  {
    return this.http.post<Response>(`${environment.apiUrl}/boxes/add-phone`, {
      nom,
      id,
      unlimited,
      debut,
      fin,
      prefix,
      telephone,
      ordre
    }).toPromise();
  }

  editAccess(id: string, action: string): Promise<Response> {
    return this.http.post<Response>(`${environment.apiUrl}/boxes/edit-access`, {
      id,
      action
    }).toPromise();
  }

  editDuration(id: string, duration: string): Promise<Response> {
    return this.http.post<Response>(`${environment.apiUrl}/boxes/edit-duration`, {
      id,
      duration
    }).toPromise();
  }

  requestListPhone(id: string): Promise<Response> {
    return this.http.post<Response>(`${environment.apiUrl}/boxes/request-list-phone`, {
      id
    }).toPromise();
  }

  getPhones(id: string): Promise<Response> {
    return this.http.get<Response>(`${environment.apiUrl}/boxes/phones?id=${id}`).toPromise();
  }

  editSMS(id: string , action: string): Promise<Response> {
    return this.http.post<Response>(`${environment.apiUrl}/boxes/sms`, {
      id,
      action
    }).toPromise();
  }

  getOrdre(id: string): Promise<Response> {
    return this.http.get<Response>(`${environment.apiUrl}/boxes/ordre?id=${id}`).toPromise();
  }

}
