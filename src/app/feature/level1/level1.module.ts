import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Level1RoutingModule } from './level1-routing.module';
import { Level1HomeComponent } from './pages/level1-home/level1-home.component';


@NgModule({
  declarations: [
    Level1HomeComponent
  ],
  imports: [
    CommonModule,
    Level1RoutingModule
  ]
})
export class Level1Module { }
