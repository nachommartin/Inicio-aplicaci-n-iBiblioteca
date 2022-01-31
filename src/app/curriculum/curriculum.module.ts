import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CurriculumRoutingModule } from './curriculum-routing/curriculum-routing.module';
import { CurriculumComponent } from './curriculum/curriculum.page';



@NgModule({
  declarations: [CurriculumComponent],
  imports: [
    CommonModule,
    IonicModule,
    CurriculumRoutingModule
  ]
})
export class CurriculumModule { }
