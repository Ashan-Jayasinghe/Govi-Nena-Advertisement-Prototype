import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HarvestingEquipmentsPage } from './harvesting-equipments.page';

const routes: Routes = [
  {
    path: '',
    component: HarvestingEquipmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HarvestingEquipmentsPageRoutingModule {}
