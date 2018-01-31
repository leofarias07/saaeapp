import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ConsultarFaturaE2ViaPage } from '../pages/consultar-fatura-e2via/consultar-fatura-e2via';
import { FaturasPage } from '../pages/faturas/faturas';
import { InformarVazamentosPage } from '../pages/informar-vazamentos/informar-vazamentos';
import { InformarFaltaDeGuaPage } from '../pages/informar-falta-de-gua/informar-falta-de-gua';
import { InformarFraudePage } from '../pages/informar-fraude/informar-fraude';


import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToConsultarFaturaE2Via(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ConsultarFaturaE2ViaPage);
  }goToFaturas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FaturasPage);
  }goToInformarVazamentos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InformarVazamentosPage);
  }goToInformarFaltaDeGua(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InformarFaltaDeGuaPage);
  }goToInformarFraude(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InformarFraudePage);
  }
}
