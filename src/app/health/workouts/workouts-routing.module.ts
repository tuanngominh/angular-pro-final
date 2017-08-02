import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutsComponent } from './workouts-page/workouts.component';
import {WorkoutPageComponent} from './workout-page/workout-page.component';

export const ROUTES: Routes = [
  { path: '', component: WorkoutsComponent },
  { path: 'new', component: WorkoutPageComponent },
  { path: ':id', component: WorkoutPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class WorkoutsRoutingModule { }
