import { TestBed } from '@angular/core/testing';

import { IndexeddbStorageService } from './indexeddb-storage.service';

describe('IndexeddbStorageService', () => {
  let service: IndexeddbStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexeddbStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
