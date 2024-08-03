import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TractorsPageRoutingModule } from './tractors-routing.module';

import { TractorsPage } from './tractors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TractorsPageRoutingModule
  ],
  declarations: [TractorsPage]
})
export class TractorsPageModule {}
