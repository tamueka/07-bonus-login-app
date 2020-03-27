
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url: 'https://identitytoolkit.googleapis.com/v1';
  public apiKey: 'AIzaSyD0yqAGw7BEA_1Mk9wy8S8b9x_zJgpfAMg';


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

      const authData = {
/*         email: usuario.email,
        password: usuario.password, */

        ...usuario,
        returnSecureToken: true
      };

      return this.http.post(
                              `${this.url}/accounts:signUp?key=${this.apiKey}`,
                              authData);
    }

}
