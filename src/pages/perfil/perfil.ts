import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Perfil} from '../../models/perfil.model';
import { PerfilesService } from '../../services/perfiles.service';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  perfil: Perfil  = {
    id: null,
    nombre:'',
    apellido:'',
    mail:'',
    clave:'',
    tipo:'conductor'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private perfiles: PerfilesService, public auth : AuthProvider,
    public alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  addPerfil(perfil: Perfil){

    this.auth.registerUser(this.perfil.mail,this.perfil.clave)
    .then((user) => {
      // El usuario se ha creado correctamente
      this.perfiles.agregarPerfil(perfil);
      alert('Perfil creado');
      this.navCtrl.pop();
      //
    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })



    
  }

}
