import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoApi } from '../producto-api';

@Component({
  selector: 'app-producto-list',
  imports: [CommonModule],
  templateUrl: './producto-list.html',
  styleUrl: './producto-list.css'
})
export class ProductoList implements OnInit {

  productos: any[] = [];
  error = '';

  constructor(private productoApi: ProductoApi) {}

//  ngOnInit(): void {
//    this.productoApi.listar().subscribe({
//      next: data => this.productos = data,
//      error: () => this.error = 'Error al cargar productos'
//    });
//  }


  cargarProductos() {
    this.productoApi.listar().subscribe(data => {
      this.productos = data;
    });
  }

  ngOnInit(): void {
    this.productoApi.listar().subscribe({
      next: data => {
        console.log('DATA RECIBIDA:', data);
        this.productos = data;
        this.cargarProductos();
      },
      error: err => console.error('ERROR HTTP', err)
    })
  }

  
  editar(producto: any) {
    this.productoApi.seleccionarProducto(producto);
  }

  eliminar(id: number) {
    if (!confirm('¿Seguro que deseas eliminar este producto?')) {
      return;
    }

    this.productoApi.eliminar(id).subscribe({
      next: () => {
        alert('Producto eliminado correctamente');
        this.cargarProductos(); // recarga manual por ahora
      },
      error: () => {
        alert('Error al eliminar el producto');
      }
    });
  }

}
