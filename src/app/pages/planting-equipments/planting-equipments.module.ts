import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantingEquipmentsPageRoutingModule } from './planting-equipments-routing.module';

import { PlantingEquipmentsPage } from './planting-equipments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantingEquipmentsPageRoutingModule
  ],
  declarations: [PlantingEquipmentsPage]
})
export class PlantingEquipmentsPageModule {}
