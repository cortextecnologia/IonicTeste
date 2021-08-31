import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NasaApi } from 'src/app/model/nasa-api';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss'],
})
export class ModalInfoComponent implements OnInit {
  @Input()
  infos:NasaApi

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  public fecharModal(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
