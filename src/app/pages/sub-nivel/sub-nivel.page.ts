import { Component, OnInit, Input } from '@angular/core';
import { SubNivel } from 'src/app/models/sub-nivel';
import { Usuario } from 'src/app/models/usuario';
import { SubNivelService } from 'src/app/services/sub-nivel.service';
import { AlertService } from 'src/app/services/alert.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Nivel } from 'src/app/models/nivel';
import { ActivatedRoute, Router } from '@angular/router';
import { NivelService } from 'src/app/services/nivel.service';

@Component({
  selector: 'app-sub-nivel',
  templateUrl: './sub-nivel.page.html',
  styleUrls: ['./sub-nivel.page.scss'],
})
export class SubNivelPage implements OnInit {

  nivel: Nivel;
  usuario: Usuario;
  listado: SubNivel;
  cargando: boolean = true;
  mensaje = 'Listando Sub Niveles...';

  constructor(
    private subNivelService: SubNivelService,
    private nivelService: NivelService,
    private alertService: AlertService,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    this.nivel = new Nivel(null, null, null, null);

    this.activatedRoute.params.subscribe(params => {
      let id = params['nivel'];
      this.nivel.id = id;
    });

  }

  async ngOnInit() {
    await this.getNivel();
    await this.getUsuario();

    this.usuarioService.loginEmitter
      .subscribe(response => {
        this.usuario = response;
      });

    await this.getSubNiveles();
  }

  async getNivel() {
    const response: any = await this.nivelService.obtener(this.nivel.id, null);

    if (response.success) {
      this.nivel = await response.data;
    } else {
      await this.alertService.informacion('Sub Nivel', '', response.error.mensaje);
    }
  }

  async getSubNiveles() {
    const response: any = await this.subNivelService.subNivelesUsuario(this.nivel.id, this.usuario.sub);

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

  public redirect(data) {
    if (data.sub_nivel.bloqueado === 'S') {
      return;
    }

    this.router.navigate(["/juego/" + data.sub_nivel.id]);
  }

}
