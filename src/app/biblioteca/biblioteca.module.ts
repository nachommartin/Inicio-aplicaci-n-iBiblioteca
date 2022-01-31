import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BibliotecaRoutingModule } from './biblioteca-routing/biblioteca-routing.module';
import { BibliotecaComponent } from './biblioteca/biblioteca.page';



@NgModule({
  declarations: [BibliotecaComponent],
  imports: [
    CommonModule,
    IonicModule,
    BibliotecaRoutingModule

  ]
})
export class BibliotecaModule { }
