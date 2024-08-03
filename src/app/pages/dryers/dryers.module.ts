import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DryersPageRoutingModule } from './dryers-routing.module';

import { DryersPage } from './dryers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DryersPageRoutingModule
  ],
  declarations: [DryersPage]
})
export class DryersPageModule {}
