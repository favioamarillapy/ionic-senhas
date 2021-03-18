import { Component, OnInit, ViewChild } from '@angular/core';
import { GlosarioService } from 'src/app/services/glosario.service';
import { IonSearchbar } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-glosario',
  templateUrl: 'glosario.page.html',
  styleUrls: ['glosario.page.scss']
})
export class GlosarioPage implements OnInit {

  @ViewChild('mySearchbar') searchbar: IonSearchbar;

  constructor(
    private glosarioService: GlosarioService,
    private alerCtrl: AlertService,
    private router: Router) { }

  public listado: any;
  mensaje = '';


  ngOnInit() {

  }

  async listar(value) {
    let param: any = {};
    if (value.detail.value != '') {
      param = { descripcion: value.detail.value };
    } else {
      param = null;
    }

    const response: any = await this.glosarioService.obtener(null, param);
    if (response.success) {
      this.listado = response.data;
      console.log(this.listado.length);
      if (this.listado.length === 0) {
        this.mensaje = 'La palabra no a sido encontrada';
        this.alerCtrl.informacion('Glosario', '', this.mensaje);
        this.searchbar.value = '';

      }
    } else {

    }
  }

  async mostarGlosario(id) {
    this.router.navigate(["/glosario-info/" + id]);
  }



}
