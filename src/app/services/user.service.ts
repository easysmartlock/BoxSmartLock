import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environnements/environnement';
import { Response } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  get(): Promise<Response> {
    return this.http.get<Response>(`${environment.apiUrl}/user`).toPromise();
  }

  post(nom, prenom): Promise<Response> {
    return this.http.post<Response>(`${environment.apiUrl}/user`, {
      nom,
      prenom
    }).toPromise();
  }

}
