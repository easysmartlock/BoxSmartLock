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

}
