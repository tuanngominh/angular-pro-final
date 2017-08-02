import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import {Meal} from '../../shared/types/meal';
import * as MealActions from '../../shared/actions/meals.actions';

import {Store} from '@ngrx/store';
import * as fromMeals from '../meals.reducer';

@Component({
  selector: 'app-meals',
  styleUrls: ['meals-page.component.scss'],
  templateUrl: 'meals-page.component.html'
})
export class MealsComponent implements OnInit, OnDestroy {

  meals$: Observable<Meal[]>;

  constructor(
    private store: Store<fromMeals.MealsState>
  ) {}

  ngOnInit() {
    this.store.dispatch(new MealActions.SubscribeMeals());
    this.meals$ = this.store.select(fromMeals.getEntities);
  }

  ngOnDestroy() {
    this.store.dispatch(new MealActions.UnsubscribeMeals());
  }

  removeMeal(event: Meal) {
    this.store.dispatch(new MealActions.RemoveMeal({meal: event}));
  }

}
