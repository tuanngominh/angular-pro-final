import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import * as DataActions from './data.actions';
import 'rxjs/add/operator/catch';
import {of} from 'rxjs/observable/of';
import {AngularFireDatabase} from 'angularfire2/database';
import {Data} from '@angular/router';

@Injectable()
export class DataEffects {

  @Effect()
  subscribeData$: Observable<Action> = this.actions$
    .ofType(DataActions.SUBCRIBE_PATH)
    .switchMap((action: DataActions.SubscribePath) => {

        const config = action.config;
        const storePath: string = config.storePath ? config.storePath : action.path;
        const takeUntil$: Observable<Action> = this.actions$
          .ofType(DataActions.UNSUBCRIBE_PATH)
          .filter((unsubscribeAction: DataActions.UnsubscribePath) =>
            unsubscribeAction.path === action.path
          );
        const handleError =
          (error: Error) => of(new DataActions.SubscribePathError(error.message));

        if (config && config.asList) {
          return this.db.list(action.path)
            .takeUntil(takeUntil$)
            .map(data => new DataActions.DataReceived(storePath, data))
            .catch(handleError);
        } else {
          return this.db.object(action.path, {preserveSnapshot: true})
            .takeUntil(takeUntil$)
            .map(data => new DataActions.DataReceived(storePath, data.val()))
            .catch(handleError);
        }
      }
    )

  constructor(
    private db: AngularFireDatabase,
    private actions$: Actions
  ) {}
}
