import { TestBed } from '@angular/core/testing';

import { CouchdbStorageService } from './couchdb-storage.service';

describe('CouchdbStorageService', () => {
  let service: CouchdbStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouchdbStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
