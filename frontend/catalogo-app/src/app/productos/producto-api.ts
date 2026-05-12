import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoApi {

  private apiUrl = 'http://localhost:8082/api/productos';


  private productoSeleccionadoSource = new BehaviorSubject<any | null>(null);
  productoSeleccionado$ = this.productoSeleccionadoSource.asObservable();

  seleccionarProducto(producto: any) {
    this.productoSeleccionadoSource.next(producto);
  }


  // 🔔 Subject para avisar cambios
  private productoGuardadoSource = new Subject<void>();
  productoGuardado$ = this.productoGuardadoSource.asObservable();

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<any[]>(this.apiUrl);
  }

  crear(producto: any) {
    return this.http.post(this.apiUrl, producto);
  }

  // ✅ Se llama cuando algo se guarda
  notificarGuardado() {
    this.productoGuardadoSource.next();
  }

  actualizar(id: number, producto: any) {
  return this.http.put(`${this.apiUrl}/${id}`, producto);
  }

  eliminar(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }  


  descargarReporte(categoria?: string) {
    let params = new HttpParams();
    if (categoria) {
      params = params.set('categoria', categoria);
    }

    return this.http.get(
      `${this.apiUrl.replace('/productos', '')}/reportes/productos`,
      { params, responseType: 'blob' }
    );
  }

  
}