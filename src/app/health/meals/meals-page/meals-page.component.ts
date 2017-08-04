import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import {Meal} from '../../shared/types/meal';
import * as MealActions from '../../shared/actions/meals.actions';
import * as DataActions from '../../../core/data/data.actions';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../../app.reducer';
import {AuthService} from '../../../auth/shared/services/auth.service';

@Component({
  selector: 'app-meals',
  styleUrls: ['meals-page.component.scss'],
  templateUrl: 'meals-page.component.html'
})
export class MealsComponent implements OnInit, OnDestroy {

  meals$: Observable<Meal[]>;

  path: string;
  constructor(
    private store: Store<fromRoot.State>,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.path = `meals/${this.uid}`;
    this.store.dispatch(
      new DataActions.SubscribePath(this.path, {
        storePath: 'meals',
        asList: true
      })
    );
    this.meals$ = this.store.select(state => state.data.meals);
  }

  ngOnDestroy() {
    this.store.dispatch(new DataActions.UnsubscribePath(this.path));
  }

  removeMeal(event: Meal) {
    this.store.dispatch(new MealActions.RemoveMeal({meal: event}));
  }

  get uid() {
    return this.authService.user.uid;
  }

}
