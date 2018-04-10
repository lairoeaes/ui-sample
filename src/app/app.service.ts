import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AppService {
  public isLogined = false;
  public isAdmin = true;
  public navigation = [];

  private normalNavs = [
    {name: 'Home', url: '/', icon: 'icon-home'},
    {name: 'Competition Items', url: '/competition-item', icon: 'fa fa-circle'},
    {name: 'Competition Items', url: '/competition-item', icon: 'fa fa-circle'},
    {name: 'Competition Items', url: '/competition-item', icon: 'fa fa-circle'},
    {name: 'Login', url: '/login', icon: 'fa fa-sign-in'}
  ];

  private userNavs = [
    {name: 'Home', url: '/', icon: 'icon-home'},
    {name: 'Logout', url: '/logout', icon: 'fa fa-sign-out'},
    {name: 'Team', url: '/team', icon: 'icon-speedometer'}
  ];

  private adminNavs = [
    {name: 'Home', url: '/', icon: 'icon-home'},
    {name: 'Logout', url: '/logout', icon: 'fa fa-sign-out'},
	{name: 'Team', url: '/admin/admin-team', icon: 'icon-speedometer'},
	{name: 'Coach', url: '/admin/admin-coach', icon: 'icon-speedometer'},
	{name: 'Comp. Item', url: '/admin/admin-competition-item', icon: 'icon-speedometer'},
	{name: 'Comp. Unit', url: '/admin/admin-competition-unit', icon: 'icon-speedometer'},
	{name: 'Member', url: '/admin/admin-member', icon: 'icon-speedometer'}
  ];

  // Methods
  constructor(private http: HttpClient, private router: Router) {
    this.navigation.push.apply(this.navigation, this.normalNavs);
  }

  addTeams(teams) {
    return this.http.post('http://karate-city-cup.tw/index.php/' + 'home/getdata', teams)
  }

  login(account, password, isAdmin) {
    this.isLogined = true;
    this.isAdmin = isAdmin;
    this.navigation.splice(0, this.navigation.length);

    if (this.isAdmin) {
      this.navigation.push.apply(this.navigation, this.adminNavs);
      this.router.navigateByUrl('/admin/admin-team');
    } else {
      this.navigation.push.apply(this.navigation, this.userNavs);
      this.router.navigateByUrl('/team');
    }
  }

  logout() {
    this.isLogined = false;
    this.navigation.splice(0, this.navigation.length);
    this.navigation.push.apply(this.navigation, this.normalNavs);
  }
}
