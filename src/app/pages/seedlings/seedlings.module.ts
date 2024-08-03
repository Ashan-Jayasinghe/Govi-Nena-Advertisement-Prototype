import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeedlingsPageRoutingModule } from './seedlings-routing.module';

import { SeedlingsPage } from './seedlings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeedlingsPageRoutingModule
  ],
  declarations: [SeedlingsPage]
})
export class SeedlingsPageModule {}
