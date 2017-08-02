import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPageComponent } from './register-page/register-page.component';

export const ROUTES: Routes = [
  { path: '', component: RegisterPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
