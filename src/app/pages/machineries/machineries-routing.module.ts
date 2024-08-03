import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachineriesPage } from './machineries.page';

const routes: Routes = [
  {
    path: '',
    component: MachineriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineriesPageRoutingModule {}
