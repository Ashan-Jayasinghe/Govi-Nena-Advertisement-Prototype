import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IrrigationSystemsPageRoutingModule } from './irrigation-systems-routing.module';

import { IrrigationSystemsPage } from './irrigation-systems.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IrrigationSystemsPageRoutingModule
  ],
  declarations: [IrrigationSystemsPage]
})
export class IrrigationSystemsPageModule {}
