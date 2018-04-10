import { Component, OnInit } from '@angular/core';
import { CompetitionItem } from "../../models/competition-item.model";
@Component({
  selector: 'app-admin-competition-item',
  templateUrl: './admin-competition-item.component.html'
})
export class AdminCompetitionItemComponent implements OnInit {
  public genders = [
    {id: 1, name: '男'},
    {id: 2, name: '女'}
  ];
  public levels = [
    {id: 1, name: '國小'},
    {id: 2, name: '國中'},
    {id: 3, name: '高中'},
    {id: 4, name: '大專社會'},
    {id: 5, name: '長青'}
  ];
  public types = [
    {id: 1, name: '個人對打'},
    {id: 2, name: '個人型'},
    {id: 3, name: '團體對打'},
    {id: 4, name: '團體型'},
    {id: 5, name: '花式基本一招'}
  ];
  public competitionItems: CompetitionItem[] = [
    new CompetitionItem(1, '1', '大專男子個人自由對打', '男', '大專',
      '個人自由對打', 1, 100),
    new CompetitionItem(2, '2', '大專女子團體自由對打', '女', '大專',
      '團體自由對打', 3, 300),
    new CompetitionItem(3, '3', '大專男子團體自由對打', '男', '大專',
      '團體自由對打', 3, 300)
  ];

  constructor() { }

  ngOnInit() {
  }

}
