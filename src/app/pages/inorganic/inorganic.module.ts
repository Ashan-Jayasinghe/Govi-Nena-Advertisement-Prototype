import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InorganicPageRoutingModule } from './inorganic-routing.module';

import { InorganicPage } from './inorganic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InorganicPageRoutingModule
  ],
  declarations: [InorganicPage]
})
export class InorganicPageModule {}
