import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';

@Component({
  selector: 'page-seccion',
  templateUrl: 'seccion.html',
})
export class SeccionPage {

    estado = '';
    distrito = '';
    secciones = [
        0306,
        0307,
        0309,
        0310,
        0311,
        0312,
        0314,
        0315,
        0316,
        0317,
        0321,
        0322,
        0323,
        0324,
        0325,
        0329,
        0330,
        0331,
        0339,
        0340,
        0341,
        0342,
        0343,
        0344,
        0345,
        0346,
        0355,
        0356,
        0357,
        0358,
        0359,
        0360,
        0381,
        0395,
        0396,
        0397,
        0416,
        0552,
        0553,
        0758,
        0819,
        0820,
        0821,
        0825,
        0827,
        0829,
        0830,
        0835,
        0836,
        0838,
        0840,
        0841,
        0842,
        0843,
        0844,
        0845,
        0846,
        0847,
        0848,
        0849,
        0850,
        0851,
        0852,
        0853,
        0854,
        0855
    ];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.estado = this.navParams.get('estado');
        this.distrito = this.navParams.get('distrito');
    }

    public goPage(seccion){
        this.navCtrl.push(InfoPage, { estado: this.estado, distrito: this.distrito, seccion: seccion });
    }

}
