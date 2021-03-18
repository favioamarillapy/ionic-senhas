import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API = environment.api

@Injectable({
  providedIn: 'root'
})
export class JuegoService extends BaseService {

  recurso = 'juego';

  public async juegosBySubNivel(subNivel) {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise(resolve => {
      this.http.get(`${API}/juego/sub-nivel/${subNivel}`, { headers }).subscribe(
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
