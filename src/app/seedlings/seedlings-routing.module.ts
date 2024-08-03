import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeedlingsPage } from './seedlings.page';

const routes: Routes = [
  {
    path: '',
    component: SeedlingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeedlingsPageRoutingModule {}
