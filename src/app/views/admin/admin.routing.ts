import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTeamComponent } from './admin-team.component';
import { AdminCoachComponent } from "./admin-coach.component";
import { AdminCompetitionItemComponent } from './admin-competition-item.component';
import { AdminCompetitionUnitComponent } from './admin-competition-unit.component';
import { AdminMemberComponent } from './admin-member.component';

const routes: Routes = [
  {
    path: 'admin-team',
    component: AdminTeamComponent,
    data: {
      title: 'Team'
	}
  },
  {
    path: 'admin-coach',
    component: AdminCoachComponent,
    data: {
      title: 'Coach'
	}
  },
  {
    path: 'admin-competition-item',
    component: AdminCompetitionItemComponent,
    data: {
      title: 'Comp. Item'
	}
  },
  {
    path: 'admin-competition-unit',
    component: AdminCompetitionUnitComponent,
    data: {
      title: 'Comp. Unit'
	}
  },
  {
    path: 'admin-member',
    component: AdminMemberComponent,
    data: {
      title: 'Member'
	}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
