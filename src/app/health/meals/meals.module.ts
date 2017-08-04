import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {MealsEffects} from './meals.effects';
import { SharedModule } from '../shared/shared.module';
import {reducer} from './meals.reducer';

// components
import { MealFormComponent } from './meal-page/meal-form/meal-form.component';

// containers
import { MealsComponent } from './meals-page/meals-page.component';
import { MealComponent } from './meal-page/meal-page.component';
import { MealsRoutingModule } from './meals-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MealsRoutingModule,
    SharedModule,
    StoreModule.forFeature('meals', reducer),
    EffectsModule.forFeature([MealsEffects])
  ],
  declarations: [
    MealsComponent,
    MealComponent,
    MealFormComponent
  ]
})
export class MealsModule {}
