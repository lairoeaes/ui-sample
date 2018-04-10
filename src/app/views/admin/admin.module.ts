import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

import { AdminRoutingModule } from './admin.routing';
import { AdminTeamComponent } from './admin-team.component';
import { AdminCoachComponent } from "./admin-coach.component";
import { AdminCompetitionItemComponent } from './admin-competition-item.component';
import { AdminCompetitionUnitComponent } from './admin-competition-unit.component';
import { AdminMemberComponent } from './admin-member.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
	AdminTeamComponent,
	AdminCoachComponent,
	AdminCompetitionItemComponent,
	AdminCompetitionUnitComponent,
	AdminMemberComponent
  ]
})
export class AdminModule { }
