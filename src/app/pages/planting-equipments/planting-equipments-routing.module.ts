import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantingEquipmentsPage } from './planting-equipments.page';

const routes: Routes = [
  {
    path: '',
    component: PlantingEquipmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantingEquipmentsPageRoutingModule {}
