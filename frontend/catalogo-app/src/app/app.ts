import { Component, signal } from '@angular/core';
import { ProductoList } from './productos/producto-list/producto-list';
import { ProductoForm } from './productos/producto-form/producto-form';

@Component({
  selector: 'app-root',
  imports: [ProductoList, ProductoForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('catalogo-app');
}
