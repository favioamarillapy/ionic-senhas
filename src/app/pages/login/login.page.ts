import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  cargando: boolean = false;
  usuario: Usuario;
  page = 'login';
  mensaje = '';

  constructor(
    private usuarioService: UsuarioService,
    private alertService: AlertService,
    private router: Router
  ) {
    this.usuario = new Usuario(null, null, null, null, null);
  }

  ngOnInit() {

  }

  async login() {
    this.cargando = true;

    this.mensaje = 'Iniciando sesión...';
    const response: any = await this.usuarioService.login(this.usuario);

    if (response.success) {

      this.mensaje = 'Asignando niveles...';
      const responseN: any = await this.usuarioService.asignarNiveles(this.usuario);
      this.cargando = false;

      if (responseN.success) {
        this.router.navigate(['/tabs/nivel']);
      } else {
        await this.alertService.informacion('Login', '', responseN.mensaje);
      };
    } else {
      this.cargando = false;
      await this.alertService.informacion('Login', '', response.error.mensaje);
    };
  }

  async registrar() {
    this.cargando = true;
    this.usuario.rol = 'US';

    this.mensaje = 'Registrando usuario...';
    const response: any = await this.usuarioService.registrar(this.usuario);
    this.cargando = false;

    if (response.success) {
      this.login();

    } else {
      await this.alertService.informacion('Registro', '', response.mensaje);
    };
  }

  segmentChanged(ev: any) {
    this.usuario = new Usuario(null, null, null, null, null);
    this.page = ev.detail.value;
  }

}
