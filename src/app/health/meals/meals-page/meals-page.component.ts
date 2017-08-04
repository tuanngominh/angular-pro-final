import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import {Meal} from '../../shared/types/meal';
import * as MealActions from '../../shared/actions/meals.actions';

import {Store} from '@ngrx/store';
import * as fromRoot from '../../../app.reducer';

@Component({
  selector: 'app-meals',
  styleUrls: ['meals-page.component.scss'],
  templateUrl: 'meals-page.component.html'
})
export class MealsComponent implements OnInit, OnDestroy {

  meals$: Observable<Meal[]>;

  constructor(
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    this.store.dispatch(new MealActions.SubscribeMeals());
    this.meals$ = this.store.select(state => state.data.meals);
  }

  ngOnDestroy() {
    this.store.dispatch(new MealActions.UnsubscribeMeals());
  }

  removeMeal(event: Meal) {
    this.store.dispatch(new MealActions.RemoveMeal({meal: event}));
  }

}
