import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantGrowthRegulatorsPage } from './plant-growth-regulators.page';

const routes: Routes = [
  {
    path: '',
    component: PlantGrowthRegulatorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantGrowthRegulatorsPageRoutingModule {}
