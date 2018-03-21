import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SeccionPage } from '../seccion/seccion';

@Component({
    selector: 'page-distrito',
    templateUrl: 'distrito.html',
})
export class DistritoPage {
    
    estado = '';
    distritos = [2];
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.estado = this.navParams.get('estado');
    }
    
    public goPage(distrito){
        this.navCtrl.push(SeccionPage, { estado: this.estado, distrito: distrito });
    }

}
