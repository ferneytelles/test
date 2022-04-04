import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'prueba',
    loadChildren: () =>
      import('./pages/prueba/prueba.module').then((m) => m.PruebaModule),
  },
  {
    path: 'imagenes',
    loadChildren: () =>
      import('./pages/images/images.module').then((m) => m.ImagesModule),
  },
  {
    path: '**',
    redirectTo: 'imagenes',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
