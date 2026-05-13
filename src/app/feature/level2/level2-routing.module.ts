import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Level1HomeComponent } from '../level1/pages/level1-home/level1-home.component';
import { Level2HomeComponent } from './pages/level2-home/level2-home.component';

const routes: Routes = [{
  path: "",
  component: Level2HomeComponent
},
{
  path: 'level3',
  loadChildren: ()=> import('../level3/level3.module').then( (m)=>m.Level3Module)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Level2RoutingModule { }
