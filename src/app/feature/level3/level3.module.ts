import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Level3RoutingModule } from './level3-routing.module';
import { Level3HomeComponent } from './pages/level3-home/level3-home.component';


@NgModule({
  declarations: [
    Level3HomeComponent
  ],
  imports: [
    CommonModule,
    Level3RoutingModule
  ]
})
export class Level3Module { }
