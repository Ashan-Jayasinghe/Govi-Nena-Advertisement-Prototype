import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InorganicPage } from './inorganic.page';

const routes: Routes = [
  {
    path: '',
    component: InorganicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InorganicPageRoutingModule {}
