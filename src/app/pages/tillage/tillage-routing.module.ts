import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TillagePage } from './tillage.page';

const routes: Routes = [
  {
    path: '',
    component: TillagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TillagePageRoutingModule {}
