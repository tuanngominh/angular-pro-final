import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as MealsActions from '../shared/actions/meals.actions';
import {Meal} from '../shared/types/meal';

export interface MealsState {
  entities: Meal [];
  selectedId: string;
}

export const initialState: MealsState = {
  entities: undefined,
  selectedId: undefined
};

export type Action = MealsActions.All;

export function reducer(state: MealsState = initialState, action: Action): MealsState {
  switch (action.type) {
    case MealsActions.MEALS_RECEIVED: {
      return {
        ...state,
        entities: action.meals
      };
    }
    case MealsActions.MEALS_LOAD_SINGLE: {
      return {
        ...state,
        selectedId: action.payload.mealId
      };
    }
    default: {
      return state;
    }
  }
}

export const getMealsState = createFeatureSelector<MealsState>('meals');
export const getEntities =
  createSelector(
    getMealsState,
    (state: MealsState) => state.entities
);
export const getSelectedId = createSelector(
  getMealsState,
  (state: MealsState) => state.selectedId
);
export const getMeal = createSelector(
  getMealsState,
  getEntities,
  getSelectedId,
  (mealState, entities: Meal [], selectedId) => {
    if (selectedId && entities) {
      const found = entities.find(entity => entity.$key === selectedId);
      return found ? found : {};
    }
    return {};
  }
);

