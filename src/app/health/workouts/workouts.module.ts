import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WorkoutsRoutingModule } from './workouts-routing.module';
// containers
import { WorkoutsComponent } from './workouts-page/workouts.component';
import {WorkoutPageComponent} from './workout-page/workout-page.component';
import {WorkoutFormComponent} from './workout-page/workout-form/workout-form.component';
import {WorkoutTypeComponent} from './workout-page/workout-form/workout-type/workout-type.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WorkoutsRoutingModule,
    SharedModule
  ],
  declarations: [
    WorkoutsComponent,
    WorkoutPageComponent,
    WorkoutFormComponent,
    WorkoutTypeComponent

  ]
})
export class WorkoutsModule {}
