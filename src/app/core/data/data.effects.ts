import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import * as DataActions from './data.actions';
import 'rxjs/add/operator/catch';
import {of} from 'rxjs/observable/of';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class DataEffects {

  @Effect()
  subscribeData$: Observable<Action> = this.actions$
    .ofType(DataActions.SUBCRIBE_PATH)
    .switchMap((action: DataActions.SubscribePath) => {
        const config = action.config;
        const storePath = config.storePath ? config.storePath : action.path;
        if (config && config.asList) {
          return this.db.list(action.path)
            .takeUntil(this.actions$.ofType(config.unsubscribe))
            .map(data => new DataActions.DataReceived(storePath, data))
            .catch((error: Error) => of(new DataActions.SubscribePathError(error.message)));
        } else {
          return this.db.object(action.path, {preserveSnapshot: true})
            .takeUntil(this.actions$.ofType(config.unsubscribe))
            .map(data => new DataActions.DataReceived(storePath, data.val()))
            .catch((error: Error) => of(new DataActions.SubscribePathError(error.message)));
        }
      }
    )

  constructor(
    private db: AngularFireDatabase,
    private actions$: Actions
  ) {}
}
