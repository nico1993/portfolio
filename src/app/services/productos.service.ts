import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url = "https://portfolio-c017d.firebaseio.com";
  loading = true;
  productos: Producto[] = [];

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos()
  {
    this.http.get(`${this.url}/productos_idx.json`).subscribe((response:Producto[]) => {
      this.loading = false;
      this.productos = response;
    })
  }
}
