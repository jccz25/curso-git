import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductoApi } from '../producto-api';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-producto-form',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './producto-form.html',
  styleUrl: './producto-form.css',
  standalone: true
})



export class ProductoForm implements OnInit {

  form: FormGroup;
  mensaje = '';
  error = '';
    // ✅ ESTA PROPIEDAD ES LA QUE FALTABA
  categoriaReporte: string = '';

  idProducto: number | null = null;

  constructor(
    private fb: FormBuilder,
    private productoApi: ProductoApi
  ) {
      this.form = this.fb.group({
        nombre: ['', Validators.required],
        descripcion: [''],
        precio: [null, [Validators.required, Validators.min(1)]],
        categoria: ['', Validators.required],
        stock: [null, [Validators.required, Validators.min(0)]],
        activo: [true]
      });
  }

  guardar() {
    this.mensaje = '';
    this.error = '';

    if (this.idProducto) {
      // 🔹 EDITAR
      this.productoApi.actualizar(this.idProducto, this.form.value)
        .subscribe({
          next: () => {
            this.mensaje = 'Producto actualizado correctamente';
            this.form.reset();
            this.idProducto = null;
          },
          error: () => this.error = 'Error al actualizar el producto'
        });

    } else {
      // 🔹 CREAR
      this.productoApi.crear(this.form.value)
        .subscribe({
          next: () => {
            this.mensaje = 'Producto guardado correctamente';
            this.form.reset();
          },
          error: () => this.error = 'Error al guardar el producto'
        });
    }
  }

    generarPDF() {
    this.productoApi.descargarReporte(this.categoriaReporte)
      .subscribe(blob => {

        const url = window.URL.createObjectURL(blob);

        // 👉 Opción A: ABRIR en nueva pestaña
        window.open(url);

        // 👉 Opción B: FORZAR descarga (descomenta si prefieres)
        // const a = document.createElement('a');
        // a.href = url;
        // a.download = 'productos.pdf';
        // a.click();

        window.URL.revokeObjectURL(url);
      });
  }
  
  ngOnInit(): void {
    this.productoApi.productoSeleccionado$
      .subscribe(producto => {
        if (producto) {
          this.idProducto = producto.id;
          this.form.patchValue(producto);
        }
      });
  }


}