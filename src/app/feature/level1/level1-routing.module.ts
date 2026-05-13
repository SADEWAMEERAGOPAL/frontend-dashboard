import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Level1HomeComponent } from './pages/level1-home/level1-home.component';

const routes: Routes = [{
  path: "",
  component: Level1HomeComponent
},
{
  path: 'level2',
  loadChildren: () => import('../level2/level2.module'). then((m)=> m.Level2Module)
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Level1RoutingModule { }
