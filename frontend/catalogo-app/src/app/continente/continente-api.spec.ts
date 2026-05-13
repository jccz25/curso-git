import { TestBed } from '@angular/core/testing';

import { ContinenteApi } from './continente-api';

describe('ContinenteApi', () => {
  let service: ContinenteApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContinenteApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
