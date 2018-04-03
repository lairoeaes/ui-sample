import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

import { AdminTeamComponent } from './admin-team.component';
import { AdminTeamRoutingModule } from './admin-team-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    AdminTeamRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [ AdminTeamComponent ]
})
export class AdminModule { }
