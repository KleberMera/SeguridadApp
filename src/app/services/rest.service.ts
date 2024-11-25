import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private readonly http = inject(HttpClient);
  public baseUrl = environment.urlBase;


  getAllTrafics() {
    return this.http.get<any>(`${this.baseUrl}trafico`);
  }

  getPaquetesTraficoRed() {
    return this.http.get<any>( `${this.baseUrl}paquetes`);
  }


  getDistribucionTraficoRed() {
    return this.http.get<any>( `${this.baseUrl}distribucion`);
  }

  getAnalisisOrigenTraficoRed() {
    return this.http.get<any>( `${this.baseUrl}origen`);
  }


}
