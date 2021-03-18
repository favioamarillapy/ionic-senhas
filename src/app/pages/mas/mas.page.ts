import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mas',
  templateUrl: 'mas.page.html',
  styleUrls: ['mas.page.scss']
})
export class MasPage {

  constructor(
    private usuarioService: UsuarioService
  ) { }

  logout() {
    this.usuarioService.cerrarSession();
  }
}
