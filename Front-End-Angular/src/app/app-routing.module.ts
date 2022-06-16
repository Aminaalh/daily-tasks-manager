import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  // { path: '', redirectTo: '/lists', pathMatch: 'full' },
  { path: 'new-list', component: NewListComponent },
  // { path: 'edit-list/:listId', component: EditListComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent },
  { path: 'lists', component: DashboardComponent },
  { path: 'lists/:listId', component: DashboardComponent },
  { path: 'lists/:listId/new-task', component: DashboardComponent },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'edit-task/:listId', component: EditTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
