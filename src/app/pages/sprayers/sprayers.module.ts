import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SprayersPageRoutingModule } from './sprayers-routing.module';

import { SprayersPage } from './sprayers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SprayersPageRoutingModule
  ],
  declarations: [SprayersPage]
})
export class SprayersPageModule {}
