import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InicioRoutingModule } from './inicio-routing/inicio-routing.module';
import { InicioComponent } from './inicio/inicio.page';



@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    IonicModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
