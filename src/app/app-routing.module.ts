import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { FormulaireComponent } from './form/formulaire.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id', component: UserComponent }],
  },
  { path: 'form', component: FormulaireComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
