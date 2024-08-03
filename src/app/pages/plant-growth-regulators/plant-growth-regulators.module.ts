import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantGrowthRegulatorsPageRoutingModule } from './plant-growth-regulators-routing.module';

import { PlantGrowthRegulatorsPage } from './plant-growth-regulators.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantGrowthRegulatorsPageRoutingModule
  ],
  declarations: [PlantGrowthRegulatorsPage]
})
export class PlantGrowthRegulatorsPageModule {}
