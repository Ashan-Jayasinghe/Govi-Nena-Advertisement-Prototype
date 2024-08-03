import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DryersPage } from './dryers.page';

const routes: Routes = [
  {
    path: '',
    component: DryersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DryersPageRoutingModule {}
