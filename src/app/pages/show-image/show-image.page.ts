import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { ModalInfoComponent } from 'src/app/component/modal-info/modal-info.component';
import { NasaApi } from 'src/app/model/nasa-api';
import { GetImageService } from 'src/app/service/get-image.service';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.page.html',
  styleUrls: ['./show-image.page.scss'],
})
export class ShowImagePage implements OnInit {
  public infos: NasaApi;
  constructor(
    private imgService: GetImageService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController) { }

  async ngOnInit() {
    const load = await this.loadingCtrl.create();
    load.present()
    this.imgService.getImagemNasa()
    .subscribe(
      resp => {
        this.infos = resp;
        load.dismiss()
      },
      err =>{
        load.dismiss()
        this.exibirErro(err)
      }
    )
    // .then(
    //   data => {
    //     this.infos = data;
    //   }
    // )
    //   .catch(err => {
    //     this.exibirErro(err)
    //   })
    //   .finally(() => {
    //     load.dismiss()
    //   })
  }

  private async exibirErro(msg){
    const alert = await this.alertCtrl.create({
      header: 'Atenção',
      message: msg
    })
    await alert.present()
  }

  public salvarImagem(){
    // heheheh
    this.imgService.downloadImage(this.infos.hdurl)
  }
  public async abrirModal(){
    const modal = await this.modalCtrl.create({
      id:'app-modal-info',
      component: ModalInfoComponent,
      cssClass:'modal-info',
      componentProps: {infos: this.infos}
    })
    await modal.present()
  }

}
