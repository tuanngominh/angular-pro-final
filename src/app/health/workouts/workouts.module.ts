import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WorkoutsRoutingModule } from './workouts-routing.module';
// containers
import { WorkoutsComponent } from './containers/workouts/workouts.component';
import {WorkoutComponent} from './containers/workout/workout.component';
import {WorkoutFormComponent} from './components/workout-form/workout-form.component';
import {WorkoutTypeComponent} from './components/workout-type/workout-type.component';
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
    WorkoutComponent,
    WorkoutFormComponent,
    WorkoutTypeComponent

  ]
})
export class WorkoutsModule {}
