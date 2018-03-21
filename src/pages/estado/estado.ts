import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DistritoPage } from '../distrito/distrito';

@Component({
  selector: 'page-estado',
  templateUrl: 'estado.html',
})
export class EstadoPage {
    
    distritos:number = 1;
    estados = ['Querétaro'];
    /*estados = [
        'AGUASCALIENTES',
        'BAJA CALIFORNIA',
        'BAJA CALIFORNIA SUR',
        'CAMPECHE',
        'COAHUILA',
        'COLIMA',
        'CHIAPAS',
        'CHIHUAHUA',
        'CIUDAD DE MÉXICO',
        'DURANGO',
        'GUANAJUATO',
        'GUERRERO',
        'HIDALGO',
        'JALISCO',
        'MÉXICO',
        'MICHOACÁN',
        'MORELOS',
        'NAYARIT',
        'NUEVO LEÓN',
        'OAXACA',
        'PUEBLA',
        'QUERÉTARO',
        'QUINTANA ROO',
        'SAN LUIS POTOSÍ',
        'SINALOA',
        'SONORA',
        'TABASCO',
        'TAMAULIPAS',
        'TLAXCALA',
        'VERACRUZ',
        'YUCATÁN',
        'ZACATECAS'    
    ];*/
    constructor(public navCtrl: NavController, public navParams: NavParams) { }

    public goPage(estado){
        this.navCtrl.push(DistritoPage, { estado: estado, distritos: this.distritos });
    }

}
