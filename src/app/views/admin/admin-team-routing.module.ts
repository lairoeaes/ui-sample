import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTeamComponent } from './admin-team.component';

const routes: Routes = [
  {
    path: '',
    component: AdminTeamComponent,
    data: {
      title: 'Team'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTeamRoutingModule {}
