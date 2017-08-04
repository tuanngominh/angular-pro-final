import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { MealsService} from '../../shared/services/meals.service';
import {Meal} from '../../shared/types/meal';
import * as MealActions from '../../shared/actions/meals.actions';
import * as fromMeals from '../meals.reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-meal',
  styleUrls: ['meal-page.component.scss'],
  templateUrl: 'meal-page.component.html'
})
export class MealComponent implements OnInit {

  meal$: Observable<Meal>;

  constructor(
    private mealsService: MealsService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromMeals.MealsState>
  ) {}

  ngOnInit() {
    if (this.route.snapshot.params.id) {
      this.store.dispatch(new MealActions.LoadSingleMeal({mealId: this.route.snapshot.params.id}))
    }

    this.meal$ = this.store.select(fromMeals.getMeal);
  }

  addMeal(event: Meal) {
    this.store.dispatch(new MealActions.AddMeal({ meal: event }));
    this.backToMeals();
  }

  updateMeal(event: Meal) {
    const key = this.route.snapshot.params.id;
    this.store.dispatch(new MealActions.UpdateMeal({ meal: {
      ...event,
      $key: key
    }}));
    this.backToMeals();
  }

  async removeMeal(event: Meal) {
    const key = this.route.snapshot.params.id;
    await this.mealsService.removeMeal(key);
    this.backToMeals();
  }

  backToMeals() {
    this.router.navigate(['meals']);
  }

}
