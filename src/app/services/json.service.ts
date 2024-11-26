import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  private readonly http = inject(HttpClient);


  getDistribucionTraficoRed() {
    return this.http.get<any>('assets/json/distribucion.json');
  }

  getAnalisisOrigenTraficoRed() {
    return this.http.get<any>('assets/json/origen.json');
  }

  getPromedioandDesviacion() {
    return this.http.get<any>('assets/json/promedio_desviacion.json');
  }

  getPorcentajeProtocolos() {
    return this.http.get<any>('assets/json/porcentaje_protocolo.json');
  }
}
