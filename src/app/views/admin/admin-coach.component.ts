import { Component, OnInit, TemplateRef  } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Coach } from '../../models/coach.model';

@Component({
  templateUrl: 'admin-coach.component.html'
})
export class AdminCoachComponent implements OnInit {
  // Create
  public isCreateShown = false;
  // coaches
  public coaches: Coach[] = [
    new Coach(1, '台灣大學', 'Lucas', '0911123456', 'lucas'),
    new Coach(2, '台灣大學', 'Aaron', '0911123456', 'aaron'),
    new Coach(3, '台灣大學', 'Joe', '0911123456', 'joe')
  ];
  public selectedCoach: Coach = this.coaches[0];
  public modalRef: BsModalRef;
  public createModal = {
    title: '新增'
  }
  public coachForm: FormGroup;

  // Methods
  constructor(private modalService: BsModalService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  createForm() {
    this.coachForm = this.fb.group({
      unit: 'unit',
      name: 'name',
      phone: 'phone',
      account: 'account'
    })
  }
}
