import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorComponent } from '../autor/autor.page'; 


const routes: Routes = [
  {
    path: '',
    component: AutorComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutorRoutingModule { }
