import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor() { }

  ngOnInit() {

    this.usuario = new UsuarioModel();

    this.usuario.email = 'tamueka83@hotmail.com';
    this.usuario.nombre = 'Samuel Ruiz';
    this.usuario.password = 'tamueka83@hotmail.com';

   }

  onSubmit(form: NgForm){

    if ( form.invalid ){ return; };

    console.log('Usuario Enviado');
    console.log(this.usuario);
    console.log(form)
  }


}
