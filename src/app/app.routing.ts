import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CompetitionItemComponent } from './views/home/competition-item.component';
import { LoginComponent } from './views/home/login.component';
import { LogoutComponent } from './views/home/logout.component';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'Home'
        }
      },
      {
        path: 'competition-item',
        component: CompetitionItemComponent,
        data: {
          title: 'Competition item'
        }
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login'
        }
      },
      {
        path: 'logout',
        component: LogoutComponent,
        data: {
          title: 'Logout'
        }
      },
      {
        path: 'admin',
        loadChildren: './views/admin/admin.module#AdminModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
