import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CredencialesPage } from './credenciales';

@NgModule({
  declarations: [
    CredencialesPage,
  ],
  imports: [
    IonicPageModule.forChild(CredencialesPage),
  ],
})
export class CredencialesPageModule {}
