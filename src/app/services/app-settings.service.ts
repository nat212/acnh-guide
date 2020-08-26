import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';
import { getNumber, getString, getBoolean } from '@nativescript/core/application-settings';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService implements SettingsService {
  constructor() {}

  getNumber(key: string, defaultValue?: number): number {
    return getNumber(key, defaultValue);
  }

  getString(key: string, defaultValue?: string): string {
    return getString(key, defaultValue);
  }

  getBoolean(key: string, defaultValue?: boolean): boolean {
    return getBoolean(key, defaultValue);
  }
}
