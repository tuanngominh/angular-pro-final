import { TestBed, inject } from '@angular/core/testing';

import { FirebaseUtilService } from './firebase-util.service';

describe('FirebaseUtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseUtilService]
    });
  });

  it('should be created', inject([FirebaseUtilService], (service: FirebaseUtilService) => {
    expect(service).toBeTruthy();
  }));
});
