import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API = environment.api

@Injectable({
  providedIn: 'root'
})
export class NivelService extends BaseService {

  recurso = 'nivel';

  public async nivelesUsuario(id) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise(resolve => {
      this.http.get(`${API}/nivel/usuario/${id}`, { headers }).subscribe(
        (response: any) => {
          resolve(response);
        },
        error => {
          resolve(error.error);
        }
      );
    });
  }
}
