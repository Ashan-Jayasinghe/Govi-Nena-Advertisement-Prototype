import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TillagePageRoutingModule } from './tillage-routing.module';

import { TillagePage } from './tillage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TillagePageRoutingModule
  ],
  declarations: [TillagePage]
})
export class TillagePageModule {}
