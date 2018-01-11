import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Perfil} from '../../models/perfil.model';
import { PerfilesService } from '../../services/perfiles.service';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the CredencialesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-credenciales',
  templateUrl: 'credenciales.html',
})
export class CredencialesPage {

  perfil: Perfil  = {
    id: null,
    nombre:'',
    apellido:'',
    mail:'',
    clave:'',
    tipo:'conductor'
  };
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private perfiles: PerfilesService,
    public auth : AuthProvider,
    public alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CredencialesPage');
  }

  login()
  {
      this.auth.loginUser(this.perfil.mail,this.perfil.clave ).then((user) => {
        }
      )
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
