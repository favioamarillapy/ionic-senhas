import { Component, OnInit } from '@angular/core';
import { NivelService } from 'src/app/services/nivel.service';
import { Nivel } from 'src/app/models/nivel';
import { AlertService } from 'src/app/services/alert.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-nivel',
  templateUrl: 'nivel.page.html',
  styleUrls: ['nivel.page.scss']
})
export class NivelPage implements OnInit {

  usuario: Usuario;
  cargando: boolean = false;
  niveles: Nivel
  mensaje = 'Listando Niveles...';

  constructor(
    private nivelService: NivelService,
    private alertService: AlertService,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.usuario = new Usuario(null, null, null, null, null, null);
  }

  async ngOnInit() {
    await this.getUsuario();

    this.usuarioService.loginEmitter
      .subscribe(response => {
        this.usuario = response;
      });

    await this.getNiveles();
  }

  async getNiveles() {
    this.cargando = true;
    const response: any = await this.nivelService.nivelesUsuario(this.usuario.sub);
    this.cargando = false;

    if (response.success) {
      this.niveles = response.data;
    } else {
      await this.alertService.informacion('Login', '', response.error.mensaje);
    }
  }

  async getUsuario() {
    this.usuario = await this.usuarioService.getUsuario();
  }

  public redirect(data) {
    if (data.nivel.bloqueado === 'S') {
      return;
    }

    this.router.navigate(["/sub-nivel/" + data.nivel.id]);
  }


}
