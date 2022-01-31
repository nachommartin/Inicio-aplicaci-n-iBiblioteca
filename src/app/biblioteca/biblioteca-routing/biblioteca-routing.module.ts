import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BibliotecaComponent } from '../biblioteca/biblioteca.page';


const routes: Routes = [
  {
    path: '',
    component: BibliotecaComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class BibliotecaRoutingModule { }
