import {Action} from '@ngrx/store';

export const SUBCRIBE_PATH = '[Data] Subscribe Path';
export const SUBCRIBE_PATH_ERROR = '[Data] Subscribe Path Error';
export const DATA_RECEIVED = '[Data] Data Received';

export const UNSUBCRIBE_PATH = '[Data] Un-subscribe Path';

export class SubscribePath implements Action {
  readonly type = SUBCRIBE_PATH;
  constructor(
    // firebase path
    public path: string,
    public config: {
      // ngrx path
      storePath?: string
      // result store as list
      asList?: boolean,
      // unsubscribe when receive this action
      unsubscribe: string,
    }
  ) {}
}

export class SubscribePathError implements Action {
  readonly type = SUBCRIBE_PATH_ERROR;
  constructor(public error: string) {}
}

export class DataReceived implements Action {
  readonly type = DATA_RECEIVED;
  constructor(public path: string, public data: any) {}
}

export class UnsubcribePath implements  Action {
  readonly type  = UNSUBCRIBE_PATH;
  constructor(public path: string) {}
}

export type All
  = SubscribePath
  | SubscribePathError
  | DataReceived
  | UnsubcribePath;
