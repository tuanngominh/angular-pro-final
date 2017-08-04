import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/observable/fromPromise';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import * as MealActions from '../shared/actions/meals.actions';
import * as DataActions from '../../core/data/data.actions';
import {AngularFireDatabase} from 'angularfire2/database';
import {AuthService} from '../../auth/shared/services/auth.service';
import {Meal} from '../shared/types/meal';
import {MealsService} from '../shared/services/meals.service';

@Injectable()
export class MealsEffects {

  @Effect() loadMeals$: Observable<Action> = this.actions$.ofType(MealActions.MEALS_SUBSCRIBE)
    .map((action: MealActions.SubscribeMeals) =>
      new DataActions.SubscribePath(`meals/${this.uid}`, {
        storePath: 'meals',
        asList: true,
        unsubscribe: MealActions.MEALS_UNSUBSCRIBE
      })
    );

  @Effect({dispatch: false}) addMeal$ = this.actions$.ofType(MealActions.MEALS_ADD)
    .map(toPayload)
    .map(payload => payload.meal)
    .switchMap((meal: Meal) => {
      return Observable.fromPromise(
        this.mealsService.addMeal(meal)
      );
    })

  @Effect({dispatch: false}) updateMeal$ = this.actions$.ofType(MealActions.MEALS_UPDATE)
    .map(toPayload)
    .map(payload => payload.meal)
    .switchMap((meal: Meal) => {
      return Observable.fromPromise(
        this.mealsService.updateMeal(meal)
      );
    })

  @Effect({dispatch: false}) removeMeal$ = this.actions$.ofType(MealActions.MEALS_REMOVE)
    .map(toPayload)
    .map(payload => payload.meal)
    .mergeMap((meal: Meal) => this.db.list(`meals/${this.uid}`)
      .remove(meal.$key));

  constructor(
    private db: AngularFireDatabase,
    private authService: AuthService,
    private mealsService: MealsService,
    private actions$: Actions,
  ) {}

  get uid() {
    return this.authService.user.uid;
  }
}
