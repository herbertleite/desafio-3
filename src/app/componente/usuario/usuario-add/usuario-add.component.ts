import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/User';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './usuario-add.component.html',
  styleUrls: ['./usuario-add.component.css']
})
export class UsuarioAddComponent implements OnInit {

  usuario = new User();

  constructor(private routeActive: ActivatedRoute, private userService: UsuarioService) { }

  ngOnInit() {


  }


  salvarUser() {
    if (this.usuario.codigo != null && this.usuario.codigo.toString().trim() != null) { /* Atualizando ou Editando*/
      this.userService.updateUsuario(this.usuario).subscribe(data => {
      });
    } else {
      this.userService.salvarUsuario(this.usuario).subscribe(data => {/* Salvando*/
      });
    }

    window.location.reload();
  }




}
