import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';
import { Page404Component } from './pages/page404/page404.component';
import { Page401Component } from './pages/page401/page401.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'new-list', component: NewListComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'lists', component: DashboardComponent },
  { path: 'lists/:listId', component: DashboardComponent },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'edit-task/:listId', component: EditTaskComponent },
  { path: '401', component: Page401Component },
  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
