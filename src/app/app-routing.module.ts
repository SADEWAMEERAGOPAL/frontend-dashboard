import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: 'level1',
      loadChildren: () =>  import('./feature/level1/level1.module').then( (m)=>m.Level1Module) 
    },
    {
      path: 'Admin',
      loadChildren: ()=> import('./feature/admin/admin.module').then( (m)=>m.AdminModule)
    },
    {
      path: "",
      redirectTo: 'level1',
      pathMatch: 'full',

    },
    {
      path: "**",
      redirectTo: 'level1'

    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
