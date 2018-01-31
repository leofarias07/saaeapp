import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FaturasPage } from '../faturas/faturas';

@Component({
  selector: 'page-consultar-fatura-e2via',
  templateUrl: 'consultar-fatura-e2via.html'
})
export class ConsultarFaturaE2ViaPage {

  constructor(public navCtrl: NavController) {
  }
  goToFaturas(params){
    if (!params) params = {};
    this.navCtrl.push(FaturasPage);
  }
}
