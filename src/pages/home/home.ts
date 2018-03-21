import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { EstadoPage } from '../estado/estado';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
    password = '';
    constructor(public navCtrl: NavController, public authProvider:AuthProvider, public alertCtrl: AlertController) { }

    public login(){
        let correctPass = this.authProvider.login(this.password);
        if(correctPass){
            this.navCtrl.push(EstadoPage);
        }else{
            let alert = this.alertCtrl.create({
                title: 'Contraseña incorrecta',
                subTitle: 'Por favor, ingresa nuevamente la contraseña',
                buttons: ['OK']
              });
              alert.present();
        }
    }

}
