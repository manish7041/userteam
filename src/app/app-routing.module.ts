import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './components/userlist/userlist/userlist.component';
import { TeamComponent } from './components/team/team/team.component';

const routes: Routes = [
  {path:'', redirectTo:'User', pathMatch:'full'},
  {path:'User', component:UserlistComponent},
  {path:'Team', component:TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
