import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TractorsPage } from './tractors.page';

const routes: Routes = [
  {
    path: '',
    component: TractorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TractorsPageRoutingModule {}
