import * as DataActions from './data.actions';
import { set, get } from 'lodash';
import { FirebaseUtilService } from '../../shared/services/firebase-util.service';

export interface DataState {
  [key: string]: any;
};

const initialState = {};

export function reducer(state: DataState = initialState, action: DataActions.All): DataState {
  switch (action.type) {
    case DataActions.DATA_RECEIVED:
      const clonedState = {...state};
      set(clonedState, action.path, FirebaseUtilService.extract(action.data));
      return clonedState;

    default:
      return state;
  }
}
