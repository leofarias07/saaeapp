import { UsuarioProvider } from './../../providers/usuario/usuario';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';




@Component({
  selector: 'page-informar-vazamentos',
  templateUrl: 'informar-vazamentos.html',
  providers: [UsuarioProvider]
})
export class InformarVazamentosPage {

  public usuarios = [];

  public usuarioCadastro = { "id":null, "endereco": "", "descricao":"", "contato":"","condicao":1 };
 
  constructor(
    public navCtrl: NavController,
   
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController,
    private usuarioService: UsuarioProvider){

   this.getUsuarios();
  }

  public getUsuarios() {
    this.usuarioService.findAll().subscribe(response => this.usuarios = response);

  }

  public popularForm(usuario) {
    this.usuarioCadastro = usuario;
  }

  public salvarUsuario() {

    if (this.usuarioCadastro.id == null) {
      this.usuarioService.salvar(this.usuarioCadastro).subscribe(response => this.getUsuarios());
    }else{
      this.usuarioService.editar(this.usuarioCadastro).subscribe(response => this.getUsuarios());
    }


  }

  public deletar(id){
    this.usuarioService.deletar(id).subscribe(response => this.getUsuarios());
  }





}
