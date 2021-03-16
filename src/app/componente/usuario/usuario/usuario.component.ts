import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-root',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  students: Observable<User[]>;


  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.usuarioService.getStudentList().subscribe(data => {
      this.students = data;
    });

  }


}
