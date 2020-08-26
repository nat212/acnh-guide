import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';

@Injectable({
  providedIn: 'root',
})
export class WebSettingsService implements SettingsService {
  private storageClass: Storage = localStorage;
  constructor() {}

  getNumber(key: string, defaultValue?: number) {
    const val = this.storageClass.getItem(key);
    return val ? JSON.parse(val) : defaultValue;
  }

  getString(key: string, defaultValue?: string) {
    return this.storageClass.getItem(key) || defaultValue;
  }

  getBoolean(key: string, defaultValue?: boolean) {
    const val = this.storageClass.getItem(key);
    return val ? JSON.parse(val) : defaultValue;
  }
}
