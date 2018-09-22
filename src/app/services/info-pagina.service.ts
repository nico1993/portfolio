import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo:any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();  
    this.cargarEquipo();
  }

  private cargarInfo()
  {
    this.http.get('assets/data/data-pagina.json').subscribe((response:InfoPagina) => {
      this.cargada = true;
      this.info = response;
    });
  }

  private cargarEquipo()
  {
    this.http.get('https://portfolio-c017d.firebaseio.com/equipo.json').subscribe((response:any) => {
      this.equipo = response;
    });
  }
}
