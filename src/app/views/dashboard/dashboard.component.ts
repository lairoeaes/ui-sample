import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  // Create
  public isCreateShown = false;
  // Teams
  public teams: Array<any> = [
    {
      id: 2,
      competitionItem: 'item',
      coach: {
        unit: 'unit',
        name: 'coach',
        phone: 'phone'
      },
      competitionUnit: 'comp. unit',
      members: [
        {
          name: 'm1',
          birthday: '1989/01/01'
        },
        {
          name: 'm2',
          birthday: '1989/01/01'
        }
      ]
    },
    {
      id: 1,
      competitionItem: 'item',
      coach: {
        unit: 'unit',
        name: 'coach',
        phone: 'phone'
      },
      competitionUnit: 'comp. unit',
      members: [
        {
          name: 'm1',
          birthday: '1989/01/01'
        },
        {
          name: 'm2',
          birthday: '1989/01/01'
        }
      ]
    }
  ];

  // Methods
  public showCreateCard() {
    this.isCreateShown = true;
  }
  public hideCreateCard() {
    this.isCreateShown = false;
  }
  ngOnInit(): void {}
}
