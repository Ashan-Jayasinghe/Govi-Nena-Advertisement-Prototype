import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TubersPageRoutingModule } from './tubers-routing.module';

import { TubersPage } from './tubers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TubersPageRoutingModule
  ],
  declarations: [TubersPage]
})
export class TubersPageModule {}
