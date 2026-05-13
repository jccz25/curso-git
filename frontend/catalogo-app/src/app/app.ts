import { RouterLink, RouterOutlet } from '@angular/router';
import { Component, signal } from '@angular/core';
import { ProductoList } from './productos/producto-list/producto-list';
import { ProductoForm } from './productos/producto-form/producto-form';
import { Varios } from './varios/varios/varios';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet, ProductoList, ProductoForm, Varios],
  //imports: [RouterOutlet],
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('catalogo-app');
}
