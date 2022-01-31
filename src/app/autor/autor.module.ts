import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutorRoutingModule } from './autor-routing/autor-routing.module';
import { IonicModule } from '@ionic/angular';
import { AutorComponent } from './autor/autor.page';



@NgModule({
  declarations: [AutorComponent],
  imports: [
    CommonModule,
    AutorRoutingModule,
    IonicModule
  ]
})
export class AutorModule { }
