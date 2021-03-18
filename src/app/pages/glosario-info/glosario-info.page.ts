import { Component, OnInit } from '@angular/core';
import { Glosario } from 'src/app/models/glosario';
import { GlosarioService } from 'src/app/services/glosario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-glosario-info',
  templateUrl: './glosario-info.page.html',
  styleUrls: ['./glosario-info.page.scss'],
})
export class GlosarioInfoPage implements OnInit {

  idGlosario = 0;
  modelo: Glosario



  constructor(
    private glosarioServices: GlosarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) {
    this.modelo = new Glosario(null, null, null, null);
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.idGlosario = id;
    });
  }

  ngOnInit() {

    this.getModelo();
  }

  async getModelo() {
    const response: any = await this.glosarioServices.obtener(this.idGlosario, null);
    console.log(response);
    if (response.success) {
      this.modelo = response.data;
    } else {
      this.alertService.informacion('Atencion', '', 'No se encontro informacion del glosario');
    }
  }
}
