import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MachineriesPageRoutingModule } from './machineries-routing.module';

import { MachineriesPage } from './machineries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MachineriesPageRoutingModule
  ],
  declarations: [MachineriesPage]
})
export class MachineriesPageModule {}
