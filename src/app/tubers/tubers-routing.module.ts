import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TubersPage } from './tubers.page';

const routes: Routes = [
  {
    path: '',
    component: TubersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TubersPageRoutingModule {}
