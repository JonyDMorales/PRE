import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
    
    nombre = '';
    estado = '';
    distrito = '';
    seccion = '';
    padron:number = 0;
    votos:number = 0;

    constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public alertCtrl: AlertController) { 
        this.storage.get('nombre').then( (name) => {
            this.nombre = name;
        });
        this.estado = this.navParams.get('estado');
        this.distrito = this.navParams.get('distrito');
        this.seccion = this.navParams.get('seccion');

    }

    public enviar(){
        //console.log(this.padron);
        //console.log(this.votos);
        let alert = this.alertCtrl.create({
            title: 'Enviado',
            subTitle: 'Información enviada correctamente.',
            buttons: ['OK']
          });
          alert.present(); 
    }

}
