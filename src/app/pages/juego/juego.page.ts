import { Component, OnInit } from '@angular/core';
import { SubNivel } from 'src/app/models/sub-nivel';
import { Usuario } from 'src/app/models/usuario';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlertService } from 'src/app/services/alert.service';
import { SubNivelService } from 'src/app/services/sub-nivel.service';
import { JuegoService } from 'src/app/services/juego.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.page.html',
  styleUrls: ['./juego.page.scss'],
})
export class JuegoPage implements OnInit {

  subNivel: SubNivel;
  usuario: Usuario;
  listado: SubNivel;
  cargando: boolean = true;
  mensaje = 'Listando Juegos...';
  defaultHref = '';

  slideOpts = {
    pagination: false
  }

  constructor(
    private subNivelService: SubNivelService,
    private juegoService: JuegoService,
    private alertService: AlertService,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute) {

    this.subNivel = new SubNivel(null, null, null, null, null);

    this.activatedRoute.params.subscribe(params => {
      let id = params['sub-nivel'];
      this.subNivel.id = id;
      this.defaultHref = '/sub-nivel/' + this.subNivel.id;
    });

  }

  async ngOnInit() {
    await this.getSubNivel();
    await this.getUsuario();

    this.usuarioService.loginEmitter
      .subscribe(response => {
        this.usuario = response;
      });

    await this.getJuegos();
  }

  async getSubNivel() {
    const response: any = await this.subNivelService.obtener(this.subNivel.id, null);

    if (response.success) {
      this.subNivel = await response.data;
    } else {
      await this.alertService.informacion('Sub Nivel', '', response.error.mensaje);
    }
  }

  async getJuegos() {
    const response: any = await this.juegoService.juegosBySubNivel(this.subNivel.id);

    if (response.success) {
      this.listado = response.data;
    } else {
      await this.alertService.informacion('Sub Nivel', '', response.error.mensaje);
    }
    this.cargando = false;
  }

  async getUsuario() {
    this.usuario = await this.usuarioService.getUsuario();
  }

}
