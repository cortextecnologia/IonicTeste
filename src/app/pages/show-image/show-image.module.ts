import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowImagePageRoutingModule } from './show-image-routing.module';

import { ShowImagePage } from './show-image.page';
import { HTTP } from '@ionic-native/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowImagePageRoutingModule
  ],

  declarations: [ShowImagePage]
})
export class ShowImagePageModule {}
