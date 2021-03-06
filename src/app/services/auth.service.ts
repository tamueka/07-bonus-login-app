import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UsuarioModel } from "../models/usuario.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public url: "https://identitytoolkit.googleapis.com/v1";
  public apiKey: "AIzaSyD0yqAGw7BEA_1Mk9wy8S8b9x_zJgpfAMg";

  userToken: string;

  //crear nuevo usuario:
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  logout() {
    localStorage.removeItem("token");
  }

  login(usuario: UsuarioModel) {
    const authData = {
      ...usuario, //spread operator, operadores spread
      returnSecureToken: true,
    };

    return this.http
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD0yqAGw7BEA_1Mk9wy8S8b9x_zJgpfAMg",
        authData
      )
      .pipe(
        map((resp) => {
          console.log("Entro en el mapa de rxjs");
          this.guardarToken(resp["idToken"]);
          return resp;
        })
      );
  }

  nuevoUsuario(usuario: UsuarioModel) {
    const authData = {
      ...usuario, //spread operator, operadores spread
      returnSecureToken: true,
    };

    return this.http
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD0yqAGw7BEA_1Mk9wy8S8b9x_zJgpfAMg",
        authData
      )
      .pipe(
        map((resp) => {
          console.log("Entro en el mapa de rxjs");
          this.guardarToken(resp["idToken"]);
          return resp;
        })
      );
  }

  private guardarToken(idToken: string) {
    this.userToken = idToken;

    localStorage.setItem("token", idToken);

    let hoy = new Date();
    hoy.setSeconds(3600);

    localStorage.setItem("expira", hoy.getTime().toString());
  }

  leerToken() {
    if (localStorage.getItem("token")) {
      this.userToken = localStorage.getItem("token");
    } else {
      this.userToken = "";
    }
    return this.userToken;
  }

  estaAutenticado(): boolean {
    if (this.userToken.length < 2) {
      return false;
    }

    const expira = Number(localStorage.getItem("expira"));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }
}
