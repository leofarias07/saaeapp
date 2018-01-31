import { Component } from '@angular/core';
import { NavController,LoadingController, AlertController } from 'ionic-angular';

import {Http } from '@angular/http';



@Component({
  selector: 'page-faturas',
  templateUrl: 'faturas.html'
})
export class FaturasPage {

  constructor(
    public navCtrl: NavController,
    private _http:Http,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController
  
  ) {
  }

  
}
