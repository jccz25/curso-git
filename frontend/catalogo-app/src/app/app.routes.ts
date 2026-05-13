// import { Routes } from '@angular/router';

// export const routes: Routes = [];



import { Routes } from '@angular/router';
import { ProductoForm } from './productos/producto-form/producto-form';
import { ProductoList } from './productos/producto-list/producto-list';
import { Varios } from './varios/varios/varios';

export const routes: Routes = [
  {
    path: 'productos',
    component: ProductoForm
  },
  {
    path: 'lista',
    component: ProductoList
  },
  {
    path: 'varios',
    component: Varios
  },
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  }
];
