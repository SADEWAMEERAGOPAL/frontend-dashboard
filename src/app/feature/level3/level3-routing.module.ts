import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Level3HomeComponent } from './pages/level3-home/level3-home.component';

const routes: Routes = [{
  path: '',
  component: Level3HomeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Level3RoutingModule { }
