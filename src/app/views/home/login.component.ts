import { Component, OnInit } from '@angular/core';
import { AppService } from './../../app.service';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  // Methods
  constructor(private appService: AppService) {}

  ngOnInit() { }

  public login(isAdmin: boolean) {
    this.appService.login('', '', isAdmin);
  }
}
