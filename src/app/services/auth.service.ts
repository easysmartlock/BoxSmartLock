import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '../models/response.model';
import { environment } from './../environnements/environnement';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly storageKey = 'auth' ;

  constructor(
    private http: HttpClient
  )
  {
  }

  get(): Promise<any> {
    return Storage.get({key: this.storageKey});
  }

  set(val: string): Promise<any> {
    return Storage.set({key: this.storageKey, value: val});
  }

  clear(): Promise<any> {
    return Storage.clear();
  }

  connexion(email: string, password: string): Promise<Response> {
    return this.http.post<Response>(`${environment.apiUrl}/connexion`, {
      email,
      password
    }).toPromise();
  }

  pass(email: string): Promise<Response> {
    return this.http.post<Response>(`${environment.apiUrl}/password`, {
      email
    }).toPromise();
  }

  inscription(email: string, password: string, nom: string, prenom: string): Promise<Response> {
    return this.http.post<Response>(`${environment.apiUrl}/inscription`, {
      email: email,
      password: password,
      nom: nom,
      prenom: prenom
    }).toPromise();
  }

}
