import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConsultarFaturaE2ViaPage } from '../pages/consultar-fatura-e2via/consultar-fatura-e2via';
import { InformarVazamentosPage } from '../pages/informar-vazamentos/informar-vazamentos';
import { InformarFaltaDeGuaPage } from '../pages/informar-falta-de-gua/informar-falta-de-gua';
import { InformarFraudePage } from '../pages/informar-fraude/informar-fraude';
import { FaturasPage } from '../pages/faturas/faturas';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UsuarioProvider } from '../providers/usuario/usuario';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConsultarFaturaE2ViaPage,
    InformarVazamentosPage,
    InformarFaltaDeGuaPage,
    InformarFraudePage,
    FaturasPage
  ],
  imports: [
    BrowserModule,
   
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ConsultarFaturaE2ViaPage,
    InformarVazamentosPage,
    InformarFaltaDeGuaPage,
    InformarFraudePage,
    FaturasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},UsuarioProvider
   
  ]
})
export class AppModule {}