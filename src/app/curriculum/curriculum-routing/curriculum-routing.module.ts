import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurriculumComponent } from '../curriculum/curriculum.page';


const routes: Routes = [
  {
    path: '',
    component: CurriculumComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class CurriculumRoutingModule { }
