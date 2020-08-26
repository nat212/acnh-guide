import { Injectable } from '@angular/core';
import { DbStorageService } from './db-storage.service';

@Injectable({
  providedIn: 'root',
})
export class IndexeddbStorageService implements DbStorageService {
  constructor() {}
}
