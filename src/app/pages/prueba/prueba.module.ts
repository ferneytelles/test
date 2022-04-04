import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PruebaRoutingModule } from './prueba-routing.module';
import { PruebaComponent } from './prueba.component';

import { ShareModule } from 'ngx-sharebuttons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonModule } from 'ngx-sharebuttons/button';

@NgModule({
  declarations: [PruebaComponent],
  imports: [
    CommonModule,
    PruebaRoutingModule,
    ShareModule,
    ShareButtonsModule.withConfig({
      debug: true,
    }),
    ShareButtonModule,
    ShareIconsModule,
  ],
})
export class PruebaModule {}
