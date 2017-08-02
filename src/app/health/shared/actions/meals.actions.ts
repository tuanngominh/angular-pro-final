import {Action} from '@ngrx/store';
import {Meal} from '../types/meal';

export const MEALS_SUBSCRIBE = '[Meals] Subscribe';
export const MEALS_RECEIVED = '[Meals] Received';
export const MEALS_UNSUBSCRIBE = '[Meals] Unsubscribe';
export const MEALS_ADD = '[Meals] Add';
export const MEALS_UPDATE = '[Meals] Update';
export const MEALS_LOAD_SINGLE = '[Meals] Load Single';
export const MEALS_REMOVE = '[Meals] Remove';

export class SubscribeMeals implements Action {
  readonly type = MEALS_SUBSCRIBE;
}

export class UnsubscribeMeals implements Action {
  readonly type = MEALS_UNSUBSCRIBE;
}

export class MealsReceived implements Action {
  readonly type = MEALS_RECEIVED;

  constructor(public meals: Meal[]) {}
}

export class AddMeal implements Action {
  readonly type = MEALS_ADD;

  constructor(public payload: { meal: Meal }) {}
}

export class UpdateMeal implements Action {
  readonly type = MEALS_UPDATE;

  constructor(public payload: { meal: Meal }) {}
}

export class LoadSingleMeal implements Action {
  readonly type = MEALS_LOAD_SINGLE;

  constructor(public payload: { mealId: string }) {}
}

export class RemoveMeal implements Action {
  readonly type = MEALS_REMOVE;

  constructor(public payload: { meal: Meal }) {}
}

export type All
  = SubscribeMeals
  | UnsubscribeMeals
  | MealsReceived
  | AddMeal
  | UpdateMeal
  | LoadSingleMeal
  | RemoveMeal;
