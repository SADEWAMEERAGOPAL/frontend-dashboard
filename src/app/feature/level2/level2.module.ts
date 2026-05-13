import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Level2RoutingModule } from './level2-routing.module';
import { Level2HomeComponent } from './pages/level2-home/level2-home.component';


@NgModule({
  declarations: [
    Level2HomeComponent
  ],
  imports: [
    CommonModule,
    Level2RoutingModule
  ]
})
export class Level2Module { }
