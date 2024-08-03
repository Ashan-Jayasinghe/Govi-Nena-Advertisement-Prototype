import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SprayersPage } from './sprayers.page';

const routes: Routes = [
  {
    path: '',
    component: SprayersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SprayersPageRoutingModule {}
