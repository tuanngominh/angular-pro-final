import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '../../../../store';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { MealsService } from '../../shared/services/meals.service';
import {Meal} from '../../shared/types/meal';

@Component({
  selector: 'app-meals',
  styleUrls: ['meals-page.component.scss'],
  templateUrl: 'meals-page.component.html'
})
export class MealsComponent implements OnInit, OnDestroy {

  meals$: Observable<Meal[]>;
  subscription: Subscription;

  constructor(
    private store: Store,
    private mealsService: MealsService
  ) {}

  ngOnInit() {
    this.meals$ = this.store.select<Meal[]>('meals');
    this.subscription = this.mealsService.meals$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeMeal(event: Meal) {
    this.mealsService.removeMeal(event.$key);
  }

}
