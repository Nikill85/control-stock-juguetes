import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './paginas/error404/error404.component';

import { ProductoComponent } from './paginas/producto/producto.component';
import { TipoProductoComponent } from './componentes/tipo-producto/tipo-producto.component';
import { ConfiguracionComponent } from './paginas/configuracion/configuracion.component';
import { ComprasComponent } from './paginas/compras/compras.component';
import { StockComponent } from './paginas/stock/stock.component';
import { VentasComponent } from './paginas/ventas/ventas.component';
import { ProveedoresComponent } from './paginas/proveedores/proveedores.component';
import { LoguinComponent } from './componentes/loguin/loguin.component';
import { HomeComponent } from './componentes/home/home.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: LoguinComponent
  },
  {
    path: 'home',
    component: HomeComponent

  },
  {
    path: 'proveedores',
    component: ProveedoresComponent
  },
  {
    path: 'productos',
    component: ProductoComponent
  },
  {
    path: 'configuracion',
    component: ConfiguracionComponent
  },
  {
    path: 'compras',
    component: ComprasComponent
  },
  {
    path: 'ventas',
    component: VentasComponent
  },
  {
    path: 'stock',
    component: StockComponent
  },
  {
    path: "**",
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
