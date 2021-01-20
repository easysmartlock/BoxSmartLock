import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environnements/environnement';
import { Response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class EasyService {

  static readonly actions = {
    actionAjoutTel: 'action_ajout_tel',
    actionSuppressionTel: 'action_suppression_tel',
    actionAccess: 'access',
    actionDuration: 'duration',
    actionListeTel: 'liste_tel'
  };

  constructor(
    private http: HttpClient
  ) { }

  get(): Promise<Response> {
    return this.http.get<Response>(`${environment.apiUrl}/easies`).toPromise();
  }

  find(id): Promise<Response> {
    return this.http.get<Response>(`${environment.apiUrl}/easies/${id}`).toPromise();
  }

  addPhone(id: string, unlimited: boolean, debut: any , fin: any , prefix: string, telephone: string): Promise<Response> {
    return this.http.post<Response>(`${environment.apiUrl}/easies/add-phone`, {
      id,
      unlimited,
      debut,
      fin,
      prefix,
      telephone
    }).toPromise();
  }

  editAccess(id: string, action: string): Promise<Response> {
    return this.http.post<Response>(`${environment.apiUrl}/easies/edit-access`, {
      id,
      action
    }).toPromise();
  }

  editDuration(id: string, duration: string): Promise<Response> {
    return this.http.post<Response>(`${environment.apiUrl}/easies/edit-duration`, {
      id,
      duration
    }).toPromise();
  }

  requestListPhone(id: string): Promise<Response> {
    return this.http.post<Response>(`${environment.apiUrl}/easies/request-list-phone`, {
      id
    }).toPromise();
  }

  getPhones(id: string): Promise<Response> {
    return this.http.get<Response>(`${environment.apiUrl}/easies/phones?id=${id}`).toPromise();
  }

  remove(id, phoneId): Promise<Response> {
    return this.http.post<Response>(`${environment.apiUrl}/easies/delete-phone`, {
      id,
      phoneId
    }).toPromise();
  }
}
