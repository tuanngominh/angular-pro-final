import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulePageComponent } from './schedule-page/schedule-page.component';

export const ROUTES: Routes = [
  { path: '', component: SchedulePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
