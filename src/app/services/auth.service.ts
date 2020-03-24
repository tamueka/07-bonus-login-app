import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey: 'AIzaSyD0yqAGw7BEA_1Mk9wy8S8b9x_zJgpfAMg';

//crear nuevo usuario:
//https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

//login
//https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]




  constructor( private http: HttpClient ) { }

    logout(){

    }

    login( usuario: UsuarioModel ) {

    }

    nuevoUsuario( usuario: UsuarioModel ){

    }

}
