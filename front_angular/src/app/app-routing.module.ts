import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductos } from './view/lista-productos/lista-productos.component';

const routes: Routes = [
  {path: 'product', component: ListaProductos},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
