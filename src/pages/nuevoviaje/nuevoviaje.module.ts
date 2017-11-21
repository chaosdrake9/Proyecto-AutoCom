import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoviajePage } from './nuevoviaje';

@NgModule({
  declarations: [
    NuevoviajePage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoviajePage),
  ],
})
export class NuevoviajePageModule {}
