import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';

export const ROUTES: Routes = [
  { path: '', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
