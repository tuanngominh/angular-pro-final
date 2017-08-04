import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseUtilService {

  constructor() { }

  public static extract(firebaseObject) {
    // add $key for array
    if (firebaseObject.length && firebaseObject.length > 0) {
      // there is $key
      if (firebaseObject[0].$key) {
        return firebaseObject.map(item => ({...item, '$key': item.$key}));
      }
    }

    if (firebaseObject.$key) {
      // add $key for single item
      return {
        ...firebaseObject,
        $key: firebaseObject.$key
      };
    }

    // no $key, so just keep original object
    return firebaseObject;
  }
}
