import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../app.service';

@Component({
    template: ''
})
export class LogoutComponent implements OnInit {
    // Methods
    constructor(private router: Router, private appService: AppService) { }
    ngOnInit() {
        this.appService.logout();
        this.router.navigateByUrl('');
    }
}
