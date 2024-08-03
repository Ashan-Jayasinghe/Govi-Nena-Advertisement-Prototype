import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HarvestingEquipmentsPageRoutingModule } from './harvesting-equipments-routing.module';

import { HarvestingEquipmentsPage } from './harvesting-equipments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HarvestingEquipmentsPageRoutingModule
  ],
  declarations: [HarvestingEquipmentsPage]
})
export class HarvestingEquipmentsPageModule {}
