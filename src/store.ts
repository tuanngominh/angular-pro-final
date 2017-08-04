import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';

import { User } from './app/auth/shared/types/user';
import { Meal } from './app/health/shared/types/meal';
import { Workout } from './app/health/shared/types/workout';
import { ScheduleItem } from './app/health/shared/types/schedule-item';

export interface State {
  user: User;
  meals: Meal[];
  selected: any;
  list: any;
  schedule: ScheduleItem[];
  date: Date;
  workouts: Workout[];
  [key: string]: any;
}

const state: State = {
  user: undefined,
  meals: undefined,
  selected: undefined,
  list: undefined,
  schedule: undefined,
  date: undefined,
  workouts: undefined,
};

export class Store {

  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().distinctUntilChanged();

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pluck(name);
  }

  set(name: string, stateData: any) {
    this.subject.next({ ...this.value, [name]: stateData });
  }

}
