import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AppService } from '../../app.service';
import { Coach } from '../../models/coach.model';
import { CompetitionItem } from '../../models/competition-item.model';
import { CompetitionUnit } from '../../models/competition-unit.model';
import { Member } from '../../models/member.model';
import { Team } from '../../models/team.model';

@Component({
  templateUrl: 'admin-team.component.html'
})
export class AdminTeamComponent implements OnInit {
  // Create
  public isCreateShown = false;
  // coaches
  public coaches: Coach[] = [
    new Coach(1, '台灣大學', 'Lucas', '0911123456', 'lucas'),
    new Coach(2, '台灣大學', 'Aaron', '0911123456', 'aaron'),
    new Coach(3, '台灣大學', 'Joe', '0911123456', 'joe')
  ];
  public selectedCoach: Coach = this.coaches[0];
  // Members
  public members: Member[] = [
    new Member(1, 'Eve', '123', new Date('1989/10/11'), this.selectedCoach),
    new Member(2, 'Catherine', '123', new Date('1989/10/11'), this.selectedCoach),
    new Member(3, 'Peggy', '123', new Date('1989/10/11'), this.selectedCoach),
    new Member(4, 'Ruru', '123', new Date('1989/10/11'), this.selectedCoach)
  ];
  // Competition items
  public competitionItems: CompetitionItem[] = [
    new CompetitionItem(1, '1', '大專男子個人自由對打', '男', '大專',
      '個人自由對打', 1, 100),
    new CompetitionItem(2, '2', '大專女子團體自由對打', '女', '大專',
      '團體自由對打', 3, 300),
    new CompetitionItem(3, '3', '大專男子團體自由對打', '男', '大專',
      '團體自由對打', 3, 300)
  ];
  // Competition units
  public competitionUnits: CompetitionUnit[] = [
    new CompetitionUnit(1, '大安國小'),
    new CompetitionUnit(2, '中山國小'),
    new CompetitionUnit(3, '台灣大學')
  ];
  // Applied teams
  public teams: Team[] = [
    new Team(1,
      this.competitionItems[1],
      this.coaches[1],
      this.competitionUnits[1],
      [
        this.members[1],
        this.members[2],
        this.members[3]
      ]
    ),
    new Team(2,
      this.competitionItems[2],
      this.coaches[2],
      this.competitionUnits[2],
      [
        this.members[3],
        this.members[2],
        this.members[1]
      ]
    )
  ];
  // New teams
  public newTeams: Team[] = [
    new Team(-1,
      this.competitionItems[2],
      this.coaches[2],
      this.competitionUnits[2],
      [
        this.members[3],
        this.members[2],
        this.members[1]
      ]
    )
  ];

  public conf: any = {
    isIdNumberShown: false
  };
  // Methods
  constructor(private appService: AppService) {}
  ngOnInit(): void { }

  public showCreateCard() {
    this.isCreateShown = true;
  }
  public hideCreateCard() {
    this.isCreateShown = false;
  }
  public addNewMember() {
    this.members.push(new Member(-1, '', '', new Date(), this.selectedCoach));
  }
  public deleteMember(index) {
    this.members.splice(index, 1);
  }
  public addNewCompetitionUnit() {
    this.competitionUnits.push(new CompetitionUnit(-1, ''));
  }
  public deleteCompetitionUnit(index) {
    this.competitionUnits.splice(index, 1);
  }
  public addNewTeam() {
    this.newTeams.push(new Team(-1, this.competitionItems[0], this.selectedCoach,
      this.competitionUnits[0], [this.members[0]]
    ));
  }
  public deleteTeam(index) {
    this.newTeams.splice(index, 1);
  }
  public submit() {
    this.appService.addTeams(this.newTeams)
      .subscribe(data =>  {
        const error = data['error'];
        if (error) {
          console.error('fail to submit new teams. Error: %s', error);
        } else {
          // show success
          console.log('success to submit new teams');
          // close new view
        }
      });
  }
}
